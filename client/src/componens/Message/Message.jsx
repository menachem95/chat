import React from "react";
import classes from "./Message.module.css";

const Message = ({ data, yourId }) => {
  return (
    <>
      <div
        className={`${classes.main} ${yourId === data.author ? classes.you : ""}`}
      >
        <div className={classes.message}>{data.message} </div>
        <div className={classes.time}>{data.time}</div>
      </div>
    </>
  );
};

export default Message;
