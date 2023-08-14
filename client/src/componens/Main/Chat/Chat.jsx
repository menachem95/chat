import classes from "./Chat.module.css";
import React, { useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../../Message/Message";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";
import { getTime } from "../../../utils";

const Chat = ({ socket }) => {
  const { userInfo, users, current_chat, messages } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const contentRef = useRef()
  

  const sendMessage = () => {
    console.log("current_chat?.socketId:",current_chat?.socketId);
    
    const message = {
      date: getTime(),
      content: contentRef.current.value,
      from: 123,// userInfo.socketId,
      // to: current_chat?.socketId,
    to: current_chat.id
    };
   
    socket.emit("send message", message);
    contentRef.current.value = "";
    dispatch(updateMessages([...messages, message]));
  };

  return (
    <div className={classes.main}>
      {current_chat ? (
        <ScrollToBottom className={classes.chat} initialScrollBehavior="auto">
          {messages
            .filter(
              (message) =>
                message.from === current_chat.socketId ||
                message.to === current_chat.socketId
            )
            .map((data, i) => {
              return (
                <Message
                  key={i}
                  data={data}
                  yourId={userInfo.socketId}
                  isLast={i === messages.length - 1}
                />
              );
            })}
          <div className={classes.footer}>
            <input
              autoFocus
              type="text"
              ref={contentRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <div
              onClick={sendMessage}
              className={`material-icons ${classes.send_icon}`}
            >
              &#xe163;
            </div>
          </div>
        </ScrollToBottom>
      ) : (
        <div>בחר משתמש</div>
      )}
    </div>
  );
};

export default Chat;
