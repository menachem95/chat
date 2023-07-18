import React from "react";
import classes from "./Message.module.css";

const Message = ({ data, yourName }) => {
  return (
    <>
      <div
        className={`${classes.main} ${yourName === data.from ? classes.you : ""}`}
      >
        <div className={classes.message}>{data.content} </div>
        <div className={classes.time}>{data.time}</div>
      </div>
    </>
  );
};

export default Message;
