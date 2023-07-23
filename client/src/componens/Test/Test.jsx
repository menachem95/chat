import React from "react";
import classes from "./Test.module.css";
import Chat from "../Chat/Chat";
import UsersList from "../UsersList/UsersList";
import CurrentChat from "../CurrentChat/CurrentChat";

const Test = ({socket}) => {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <div className={classes.my_account}>my_account</div>
        <CurrentChat className={classes.header} />

        <UsersList socket={socket} />
        <Chat socket={socket} />
      </div>
    </div>
  );
};

export default Test;
