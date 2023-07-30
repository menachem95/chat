import React, { useEffect } from "react";
import classes from "./CurrentChat.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";

const CurrentChat = () => {
  const { current_chat, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const newMessages = messages.map((message) => {
  //     return {
  //       ...message,
  //       isRead: message.from === current_chat.id ? true : false,
  //     };
  //   });
  //   dispatch(updateMessages(newMessages));
  // }, []);

  return <div className={classes.main}>{current_chat?.name}</div>;
};

export default CurrentChat;
