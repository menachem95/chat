import React from "react";
import classes from "./DesinationMessage.module.css"
import { useSelector } from "react-redux";


const DesinationMessage = () => {
    const {desination, user} = useSelector((state) => state.user )
return <div className={classes.main}>{desination.name}</div>
}

export default DesinationMessage;