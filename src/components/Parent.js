import React, {useState} from "react";
import Child from "./Child";

const Parent = () =>{
    let[inputValue, setInputValue] = useState("");

    function handleInput(event){
        setInputValue(event.target.value)
    }
  
    return(
        <div className = "parent">
            <h1>Parent Component</h1>
            {inputValue}
            <Child inputValue = {inputValue} handleInput = {handleInput}/>
        </div>
    )
}
export default Parent;