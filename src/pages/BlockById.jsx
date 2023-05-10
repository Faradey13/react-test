import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {findAllByDisplayValue} from "@testing-library/react";
import MyButton from "../UI/button/MyButton";

const BlockById = () => {

    const [ blk, setBlk] = useState({})
    const [comment, setComment] = useState()
    const params = useParams()
const [fetchingById, isLoading, error] = useFetching(async(id)=> {
   const response = await PostService.getById(id)

    setBlk(response.data)

})
    useEffect(()=>{
        fetchingById(params.id)

    },[])

    const commentAreaButton = (e) => {
        e.preventDefault()
        console.log(blk)
    }

    return (
        <div>
             {params.id} BLOCK

            <div>
                {blk.title}
            </div>
            <div><img style={{width:"100%"}} src={blk.url} alt=""/></div>

            <form action="">
                <textarea onChange={e =>{
                   setComment(e.target.value)
                }} value={comment} style={{margin: '10px'}} placeholder="введите комментарий" name="" id="" cols="30" rows="10"></textarea>
                <MyButton onClick={commentAreaButton}>Отправить </MyButton>
            </form>
        </div>

    );
};

export default BlockById;