import React from "react";

const Child = ({inputValue, handleInput}) =>{

    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type = "text" value = {inputValue} onChange = {handleInput}/>

        </div>
    )
}
export default Child;