import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import cat from "../img/cat_1.jpg";

const BlockForm = ({create}) => {



    const [block, setBlock] = useState({title: '', body: ''})
    const [file, setFile] =useState()

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const addNewBlock = (e) => {
        e.preventDefault()

        const newBlock = {...block, url: file, id: Date.now()}

        create(newBlock)
        setBlock({title: '', body: ''})
    }

        return (
            <form className="animal_form" action="">
                <MyInput
                    value={block.title}
                    onChange={e => setBlock({...block, title: e.target.value})}
                    placeholder="Название"
                    type="text"/>
                <MyInput
                    value={block.body}
                    onChange={e => setBlock({...block, body: e.target.value})}
                    placeholder="Описание"
                    type="text"/>
                <MyInput onChange={handleChange} type="file"/>
                <MyButton onClick={addNewBlock}>Отправить</MyButton>
            </form>
        );

}
export default BlockForm;