import React, { useEffect } from "react";
import classes from "./CurrentChat.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";

const CurrentChat = () => {
  const { current_chat, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const newMessages = messages.map((message) => {
      return { ...message };
    });
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i].from === current_chat.id) {
        newMessages[i].isRead = true;
      }
    }

    dispatch(updateMessages(newMessages));
  }, []);

  return <div className={classes.main}>{current_chat?.name}</div>;
};

export default CurrentChat;
