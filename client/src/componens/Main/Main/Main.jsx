import React, {useEffect} from "react";
import classes from "./Main.module.css";
import Chat from "../Chat/Chat";
import UsersList from "../UsersList/UsersList";
import CurrentChat from "../CurrentChat/CurrentChat";
import MyAccount from "../MyAccount/MyAccuont";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";

const Test = ({ socket }) => {
  const {messages, current_chat} = useSelector(state => state.user)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   socket.on("get message", (message) => {
  //     console.log(`message.content: ${message.content}`);
  //     const newMessages = [...messages, {...message, isRead: message.isRead || current_chat?.id === message.from ? true : false}]
  //     dispatch(updateMessages(newMessages));
      
  //   });
  // }, [messages]);
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
