import React from "react";
import classes from "./Main.module.css";
import Chat from "../Chat/Chat";
import UsersList from "../UsersList/UsersList";
import CurrentChat from "../CurrentChat/CurrentChat";
import MyAccount from "../MyAccount/MyAccuont";

const Test = ({ socket }) => {
  return (
    <div className={classes.main}>
      <div className={classes.grid_container}>
        <MyAccount />
        <CurrentChat />
        <UsersList socket={socket} />
        <Chat socket={socket} />
      </div>
    </div>
  );
};

export default Test;
