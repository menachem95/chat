import React from "react";
import classes from "./Test.module.css";
import Chat from "../Chat/Chat";

const Test = ({socket}) => {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.my_account}>my_account</div>
        <div className={classes.header}>header</div>

        <div className={classes.users}>users</div>
        <Chat socket={socket} className={classes.chat}/>
      </div>
    </div>
  );
};

export default Test;
