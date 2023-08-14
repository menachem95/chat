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
        isRead: message.isRead || message.from === userData.id ? true : false,
      };
    });

    dispatch(updateMessages(newMessages));
    dispatch(changeCurrent_chat(userData));
  };
  const unreadMessages = () => {
    return messages.filter(
      (message) => message.from === user.id && !message.isRead
    ).length;
  };

  return (
    
    <tr 
      key={user.id}
      className={classes.user}
      onClick={() => onClickHandler({ id: user.id, name: user.name, id: user.id })}
    ><td>
      <div> {user.name}</div>
      <div>
        {unreadMessages() !== 0
          ? ` הודעות שלא נקראו ${unreadMessages()}`
          : ""}
      </div>
      <div className={user.online ? classes.online : classes.notOnline} />
      {user.online ? <div>מחובר/ת</div> : <div>{`נראה לאחרונה ${user.updatedAt
}`}</div>}</td>
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
     <table >
      <tbody >{users
        
        .map((user) => (
          <OneUserInList key={user.id} user={user} />
        ))}</tbody>
    </table>
      
    </div>
  );
};

export default UsersList;
