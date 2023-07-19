import React from "react";
import Chat from "../Chat/Chat";
import classes from "./Main.module.css";
import { useSelector } from "react-redux";
import UsersList from "../UsersList/UsersList";

const Main = ({ socket }) => {
  const { users } = useSelector((state) => state.user);

  return (
    <div className={classes.main}>
      <UsersList />
      <Chat socket={socket} />
    </div>
  );
};

export default Main;
