import React from "react";
import classes from "./Test.module.css";

const Test = () => {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.my_account}>my_account</div>
        <div className={classes.header}>header</div>

        <div className={classes.users}>users</div>
        <div className={classes.chat}>chat</div>
      </div>
    </div>
  );
};

export default Test;
