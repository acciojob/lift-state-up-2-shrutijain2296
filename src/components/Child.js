import React from "react";

const Child = ({ handleInput}) =>{

    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type = "text" onChange = {handleInput}/>

        </div>
    )
}
export default Child;