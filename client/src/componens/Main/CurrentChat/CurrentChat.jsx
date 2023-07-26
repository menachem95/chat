import React from "react";
import classes from "./CurrentChat.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";

const CurrentChat = () => {
  const { current_chat, user, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const newMessages = [...messages];

  console.log("newMessages:", newMessages);
  for (let i = 0; i < newMessages; i++) {
    if (newMessages[i].from === current_chat.id) {
      debugger;
      newMessages[i].isRead = true;
    }
  }

  dispatch(updateMessages(newMessages));
  return <div className={classes.main}>{current_chat?.name}</div>;
};

export default CurrentChat;
