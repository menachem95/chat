import React from "react";
import Chat from "../Chat/Chat";
import classes from "./Main.module.css";
import UsersList from "../UsersList/UsersList";

const Main = ({ socket }) => {
 
  return (
    <div className={classes.main}>
      <UsersList />
      <Chat socket={socket} />
    </div>
  );
};

export default Main;
