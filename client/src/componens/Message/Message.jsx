import classes from "./Message.module.css";

const Message = ({ data, author }) => {
  return (
    <>
      <div className={`${classes.message} ${author ? classes.author : ""}`}>{data.message}</div>
      <div className={classes.date}>{data.date}</div>
    </>
  );
};

export default Message;
