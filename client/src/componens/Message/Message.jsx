import classes from "./Message.module.css";

const Message = ({ data, you }) => {
    
  return (
    <>
      <div className={classes.main}>
        <div className={`${classes.message , classes.you}`} id={"you"}>{data.message} </div>
        <div className={classes.time}>{data.time}</div>
      </div>
     
    </>
  );
};

export default Message;
