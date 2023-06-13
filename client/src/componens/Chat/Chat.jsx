import classes from "./Chat.module.css";
import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";
import Message from "../Message/Message";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const inputRef = useRef();
  const [message, setMessage] = useState({});
  const [messageList, setMessageList] = useState([]);
  const { id } = useSelector(state => state.user)

  const sendMessage = async () => {
    console.log(message);
    await socket.emit("send-message", {
      author: id,
      room: "room",
      message: inputRef.current.value,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    });
    // { message: message }
    // );
    inputRef.current.value = "";
  };

  useEffect(() => {
    socket.on("login", (date) => {
      console.log(date, "login");
    })
    socket.on("receive-message", (data) => {
      console.log(data);
      setMessageList([...messageList, data]);
    });
  }, [socket.on, messageList]);

  // socket.on("receive-message", (message) => {
  //   console.log(message.message);
  //   setMessageList([...messageList, message.message]);
  // });

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div>{id}</div>
      </div>
      <div className={classes.chat}>
        {messageList.map((data, i) => {
          
          return <Message key={i} data={data} yourId={id} />;
        })}
      </div>
      <div className={classes.footer}>
        <input
          autoFocus
          type="text"
          // onChange={(e) => setMessage(e.target.value)}
          ref={inputRef}
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
    </div>
  );
};

export default Chat;
