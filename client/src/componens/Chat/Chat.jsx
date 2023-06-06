import classes from "./Chat.module.css";
import { useRef } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const inputRef = useRef();

  const sendMessage = () => {
    socket.emit("send-message", { message: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div></div>
      </div>
      <div className={classes.chat}>
        <div></div>
      </div>
      <div className={classes.footer}>
        <input
          type="text"
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
