import React from "react";
import classes from "./CurrentChat.module.css";
import { useSelector } from "react-redux";
import { updateMessages } from "../../../store/userSlice";

const CurrentChat = () => {
  const { current_chat } = useSelector((state) => state.user);
  
  return <div className={classes.main}>{current_chat?.name}</div>;
};

export default CurrentChat;
