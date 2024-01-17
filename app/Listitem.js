"use client"
import { useState } from "react";
import ToDoList from "./ToDoList";

function Listitem(){
    const [inputList,setInputList]=useState("");
    const [newItem,setNewItem]=useState([]);

    const items =(items)=>{
        setInputList(items.target.value);

    }
    const AddNewData=()=>{
        setNewItem((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");

    }
return(
    <>
        <div className='continer continer1 '>
          <input className='input' type="text" placeholder='Add a Item'
            value={inputList}
           onChange={ items} />
          <button className='buten' onClick={AddNewData}>+</button>

          <ol className="list">
            {/* <li>{inputList}</li> */}
            {newItem.map((itemvalue)=>{
                return <ToDoList text={itemvalue}/>
                    
                })}
          </ol>
        </div>
    </>
)
}
export default Listitem;

 