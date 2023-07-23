import classes from "./Chat.module.css";
import React, { useRef, useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom"

import Message from "../Message/Message";
import { useSelector, useDispatch } from "react-redux";
import {getUsers} from "../../store/userSlice";

const Chat = ({ socket }) => {
  const { userInfo, users,  current_chat} = useSelector((state) => state.user);
  const dispatch = useDispatch()
 
  const contentRef = useRef();
  const [messages, setMessages] = useState([]);

 
  console.log("users", users);
  useEffect(() => {
    socket.on("get message", (message) => {
      console.log(`message.content: ${message.content}`);
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {socket.on("get users", (usersFromSrv) => {
dispatch(getUsers(usersFromSrv))
  })}, [users]);
  const sendMessage = (e) => {
   
    socket.emit("send message", {
      content: contentRef.current.value,
      from: userInfo.id,
      to: current_chat?.id,
    });
    contentRef.current.value = "";
  };

  return (
    <div className={classes.main}>
      {current_chat ?  <ScrollToBottom className={classes.chat} initialScrollBehavior="auto" > 
        
        {messages
        // .filter(message => message.from === desination.id)
        .map((data, i) => {
          return <Message key={i} data={data} yourId={userInfo.id} isLast={i === messages.length - 1}/>;
        })}
          <div className={classes.footer}>
        <input
          autoFocus
          type="text"
          ref={contentRef}
          // onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          // onKeyDown={handleKeyDown}
        />
        <div
          onClick={sendMessage}
          className={`material-icons ${classes.send_icon}`}
        >
          &#xe163;
        </div>
      </div>
      </ScrollToBottom>: <div>בחר משתמש</div>}
      {/* <button type="button" onClick={() => socket.on("join", "Test")}>
        Test group
      </button>
      <div className={classes.header}>
        <div>user id:{userInfo.id}</div>
        <div>user name:{userInfo.name}</div>
      </div> */}
    
    
    </div>
  );
};

export default Chat;
