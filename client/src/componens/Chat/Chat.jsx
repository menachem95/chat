import classes from "./Chat.module.css";
import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";
import Message from "../Message/Message";
import { useSelector } from "react-redux";

const Chat = ({ userInfo, updetUserId }) => {
  const [content, setContent] = useState("");

  const socketRef = useRef();
  console.log(userInfo);

  let socket
  useEffect(() => {
    socket = io.connect("http://localhost:8080");
    socket.on("connect", () => {
      
      const id = socket.id;
      console.log(`socket id: ${id}`);
      updetUserId(id);
    });
  }, []);

  

  const sss = () => {
    socket.emit("send message", {
      content: "eee",
    });
  };


  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div>user id:{userInfo.id}</div>
        <div>user name:{userInfo.userName}</div>
      </div>
      <div className={classes.chat}>
        {/* {messageList.map((data, i) => {
          return <Message key={i} data={data} yourId={id} />;
        })} */}
      </div>
      <div className={classes.footer}>
        <input
          autoFocus
          type="text"
          onChange={(e) => setContent(e.target.value)}
          
          onKeyDown={(e) => {
            
          }}
        />
        <div
         
          onClick={sss}
          
          className={`material-icons ${classes.send_icon}`}
        >
          &#xe163;
        </div>
      </div>
    </div>
  );
};

export default Chat;
