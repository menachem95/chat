import classes from "./Chat.module.css";
import React, { useRef, useState, useEffect } from "react";

import Message from "../Message/Message";
import { useSelector } from "react-redux";

const Chat = ({ userInfo, socket }) => {
  const [content, setContent] = useState({});
  const [messages, setMessages] = useState([]);

  console.log(userInfo);
  useEffect(() => {
    socket.on("get message", (message) => {
      console.log(`message.content: ${message.content}`);
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send message", { content });
   
    e.target.value = ""
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      socket.emit("send message", { content });
     
      e.target.value = ""
    }
  }

  return (
    <div className={classes.main}>
      <button type="button" onClick={() => socket.on("join", "Test")}>
        Test group
      </button>
      <div className={classes.header}>
        <div>user id:{userInfo.id}</div>
        <div>user name:{userInfo.userName}</div>
      </div>
      <div className={classes.chat}>
        {messages.map((data, i) => {
          return (
            <Message
              key={i}
              data={data}
              //  yourId={id}
            />
          );
        })}
      </div>
      <div className={classes.footer}>
        <input
          autoFocus
          type="text"
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={sendMessage}
          className={`material-icons ${classes.send_icon}`}
        >
          &#xe163;
        </div>
      </div>
    </div>
  );
};

export default Chat;
