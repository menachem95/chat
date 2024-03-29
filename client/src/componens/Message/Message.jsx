import React from "react";
import classes from "./Message.module.css";

const Message = ({ data, yourId, isLast }) => {
  
  return (
    <>
      <div
        className={`${classes.main} ${yourId === data.from ? classes.you : ""} ${isLast ? classes.last : ""}`}
      >
        <div className={classes.content}>{data.content} </div>
        <div className={classes.time}>{`${data.date.hours}:${data.date.minutes}`}</div>
      </div>
    </>
  );
};

export default Message;
