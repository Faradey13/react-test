import {useMemo} from "react";

export const  useSortedBlock = (blocks, sort) =>{
    const sortedBlocks = useMemo(()=>{
        if(sort){
            return  [...blocks].sort((a, b) =>
                a[sort].localeCompare(b[sort]))
        } else {
            return blocks
        }
    }, [blocks, sort])
    return sortedBlocks
}

export const useBlocks = (blocks, sort, query) => {
    const sortedBlocks = useSortedBlock(blocks, sort)
    const sortedAndSearchedBlocks = useMemo(()=>{
        return sortedBlocks.filter(b => b.title.toLowerCase().includes(query))
    },[sortedBlocks, query])
    return sortedAndSearchedBlocks
}