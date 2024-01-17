import React, { useState } from "react";

function ToDoList(props){
    // const [Delete setDeleteItem]= useState();
    
    const Deleteitem=()=>{
        console.log("deleted");
    }

return (
    <>
        <div className="todo-style"> 
            <li className="AddedItem">{props.text}
            <button className="delete" onClick={Deleteitem}>Delete</button>
            </li>
             
        </div>
    </>
)
}
export default ToDoList;
