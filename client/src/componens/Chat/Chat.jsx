import classes from "./Chat.module.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const Chat = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div></div>
      </div>
      <div className={classes.chat}></div>
      <div className={classes.footer}>
        <input type="text"/>
        <div className={`material-icons ${classes.send_icon}`} >&#xe163;</div>
      </div>
    </div>
  );
};

export default Chat;
