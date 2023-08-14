import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./UsersList.module.css";
import {
  changeCurrent_chat,
  getUsers,
  updateMessages,
} from "../../../store/userSlice";

const OneUserInList = ({ user }) => {
  const { messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClickHandler = (userData) => {
    const newMessages = messages.map((message) => {
      return {
        ...message,
        isRead: message.isRead || message.from === userData.socketId ? true : false,
      };
    });

    dispatch(updateMessages(newMessages));
    dispatch(changeCurrent_chat(userData));
  };
  const unreadMessages = () => {
    return messages.filter(
      (message) => message.from === user.socketId && !message.isRead
    ).length;
  };

  return (
    
    <tr
      key={user.socketId}
      className={classes.user}
      onClick={() => onClickHandler({ socketId: user.socketId, name: user.name, id: user.id })}
    >
      <div> {user.name}</div>
      <div>
        {unreadMessages() !== 0
          ? ` הודעות שלא נקראו ${unreadMessages()}`
          : ""}
      </div>
      <div className={user.online ? classes.online : classes.notOnline} />
      {user.online ? <div>מחובר/ת</div> : <div>{`נראה לאחרונה ${user.updatedAt
}`}</div>}
    </tr>
  );
};

const UsersList = ({ socket }) => {
  const { users, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
    socket.once("get users", (usersFromSrv) => {
      
      console.log("users: ", users);
            dispatch(getUsers(usersFromSrv.filter(user => user.name !== userInfo.name)));
    });
  // }, [users]);

  return (
    <div className={classes.main}>
      <table>{users
        
        .map((user) => (
          <OneUserInList key={user.socketId} user={user} />
        ))}</table>
      
    </div>
  );
};

export default UsersList;
