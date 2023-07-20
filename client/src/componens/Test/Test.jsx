import React from "react";
import classes from "./Test.module.css";
import Chat from "../Chat/Chat";
import UsersList from "../UsersList/UsersList";

const Test = ({socket}) => {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.my_account}>my_account</div>
        <div className={classes.header}>header</div>

        <UsersList />
        <Chat socket={socket} />
      </div>
    </div>
  );
};

export default Test;
