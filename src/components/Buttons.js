import React from "react";
import classes from "./Buttons.module.css"

const numbers = [
    7, 8, 9, "/", 
    4, 5, 6, "*", 
    1, 2, 3, "+", 
    ".", 0, "=", "-"];

function Buttons (props){
    return(
        <div className={classes.buttons}>
        {numbers.map((number, index) => (
          <button onClick={()=>props.calculationsHandler(number)} key={index}>{number}</button>
        ))}
        </div>
    )
}

export default Buttons