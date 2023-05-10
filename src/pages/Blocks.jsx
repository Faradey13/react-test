import React, {useEffect, useRef, useState} from "react";
import {useBlocks} from "../hooks/useBlock";
import PostService from "../API/PostService";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import BlockForm from "../components/BlockForm";
import MyFilter from "../components/MyFilter";
import Myloader from "../UI/loader/Myloader";
import BlockList from "../components/BlockList";
import {useFetching} from "../hooks/useFetching";
import {countPages, pagesArray} from "../utils/pages";
import MySelect from "../UI/MySelect";
import {useObserve} from "../hooks/useObserve";



function Block() {
    const [blocks, setBlocks] = useState([])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [visible, setVisible] = useState(false)
    const sortedAndSearchedBlocks = useBlocks(blocks, filter.sort, filter.query)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)
    const [totalPages, setTotalPages] = useState(0)

    const lastElement = useRef()




    const [fetchBlock, isLoading, blockError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setBlocks([...blocks, ...response.data])
        console.log(limit)
        const totalCount = response.headers['x-total-count']
        setTotalPages(countPages(totalCount, limit))

    })
    const ArrayPages = pagesArray(totalPages)

    const changePage = (page) => {
        setPage(page)

    }

    useObserve(isLoading,lastElement, page < totalPages, setPage, page)

    useEffect(() => {
        fetchBlock()
    }, [page, limit])


    const createBlock = (newBlock) => {
        setBlocks([...blocks, newBlock])
        setVisible(false)
    }

    const removeBlock = (block) => {
        setBlocks(blocks.filter(b => b.id !== block.id))
    }


    return (
        <div className="App">
            <MyButton onClick={() => setVisible(true)}>
                Создать новый блок
            </MyButton>

            <MyModal
                visible={visible}
                setVisible={setVisible}
            >
                <BlockForm create={createBlock}/>
            </MyModal>


            <hr style={{margin: '15px'}}/>

            <MyFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                options={[

                    {value: '10', name: '10'},
                    {value: '25', name: '25'},
                    {value: '50', name: '50'},
                    {value: '-1', name: 'Все сразу'},
                ]}
                value={limit}
                deflautValue="Блоков на страницу"
                onChange={value => setLimit(value)}
            />
            {
                blockError && <h1>{blockError}</h1>
            }

            <BlockList remove={removeBlock} blocks={sortedAndSearchedBlocks}/>
            <div ref={lastElement} style={{height:'10px', background:'red'}}></div>

            {isLoading && <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <Myloader/>
            </div>}




            <div className="span_class">
                {
                    ArrayPages.map(p =>
                            <span

                                onClick={()=>{
                                    changePage(p)
                                }}
                                key={p}
                                className={page === p ? 'page_active' : 'page'}>
                    {p}
                    </span>
                    )}
            </div>
        </div>
    );
}

export default Block;
