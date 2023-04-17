import React from "react";
import classes from "./Screen.module.css"

function Screen(props){
    return <div className={classes.screen}>{props.calculations}</div>
}

export default Screen