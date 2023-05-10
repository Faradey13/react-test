import React from 'react';
import Block from "./Block";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const BlockList = ({blocks, remove}) => {
if (!blocks.length){
    return <h1 style={{margin: '15px'}}>Постов не найдено</h1>

}

    return (
        <div>
            <h1 className="app_title">Загрузите картинку</h1>
            <TransitionGroup className="todo-list">
            {blocks.map(block =>

                <CSSTransition
                    key={block.id}
                    timeout={500}
                    classNames="block"
                    >
                 <Block remove={remove} block = {block}/>
                </CSSTransition>

            )}
            </TransitionGroup>
            
        </div>

    );
};

export default BlockList;