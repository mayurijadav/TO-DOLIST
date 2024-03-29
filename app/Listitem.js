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

    };  
    const Deleteitem=(id)=>{
        console.log("deleted");

        setNewItem((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
         
    };

return(
    <>
        <div className='continer continer1 '>
          <input className='input' type="text" placeholder='Add a Item'
            value={inputList}
           onChange={ items} />
          <button className='buten' onClick={AddNewData}>+</button>

          <ol className="list">
            {/* <li>{inputList}</li> */}
            {newItem.map((itemvalue , index)=>{
                return <ToDoList 
                key={index} 
                id={index}
                text={itemvalue}  
                onSelect={Deleteitem}
                />
                    
                })}
          </ol>
        </div>
    </>
)
}
export default Listitem;

 