import classes from "./Chat.module.css";
import { useRef, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const inputRef = useRef();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    console.log(message)
    await socket.emit(
      "send-message",
      //  { message: inputRef.current.value });
      { message: message }
    );
    // inputRef.current.value = "";
  }

  useEffect(() => {
    socket.on("receive-message", (data) => {
      console.log(data)
      setMessageList([...messageList, data])
    })
    
  },[socket.on, messageList])
  
  // socket.on("receive-message", (message) => {
  //   console.log(message.message);
  //   setMessageList([...messageList, message.message]);
  // });

  
  

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div></div>
      </div>
      <div className={classes.chat}>
        {messageList.map((data, i) => {
          return <div key={i}>{data.message}</div>;
        })}
      </div>
      <div className={classes.footer}>
        <input
        autoFocus
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          // ref={inputRef}
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
