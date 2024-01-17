import React, { useState } from "react";

function ToDoList(props){
return (
    <>
        <div className="todo-style"> 
            <li className="AddedItem">{props.text}
            <button className="delete" onClick={()=>{
                props.onSelect(props.id)
            }}>Delete</button>
            </li>
             
        </div>
    </>
)
}
export default ToDoList;
