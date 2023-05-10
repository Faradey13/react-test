import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";


const Block = (props) => {
    const router = useNavigate()
    return (
        <div className="block">
            <h2 className="animal_title">{props.block.title}</h2>
            <div className= "animal_dis">
                <img className= "animal_img"  src={props.block.url} alt="dog_1"/>
                <p className="animal_description">{props.block.body}</p>
                <MyButton onClick = {() => props.remove(props.block)}> Удалить блок </MyButton>
                <MyButton onClick={()=>router(`/blocks/${props.block.id}`)}>Открыть</MyButton>
            </div>


        </div>

    );
};

export default Block;