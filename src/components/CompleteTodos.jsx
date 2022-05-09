import React from "react";

export const CompleteTodos = (props) => {
    const {completeTodos, onClickBack} = props;
    return (
        <div className='complete-area'>
            <p className='title'>完了のTODO</p>
            <ul >
                {completeTodos.map((todo, index) => {
                    return (
                        <li className='list-row' key={todo}>
                        <p>{todo}</p>
                        <button onClick={() => onClickBack(index)}>戻す</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}