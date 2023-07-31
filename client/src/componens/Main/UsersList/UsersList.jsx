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
    <div
      key={user.id}
      className={classes.user}
      onClick={() => onClickHandler({ id: user.id, name: user.name })}
    >
      <div> {user.name}</div>
      <div>
        {unreadMessages() !== 0
          ? ` הודעות שלא נקראו ${unreadMessages()}`
          : ""}
      </div>
    </div>
  );
};

const UsersList = ({ socket }) => {
  const { users, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("get users", (usersFromSrv) => {
      dispatch(getUsers(usersFromSrv));
    });
  }, [users]);

  return (
    <div className={classes.main}>
      {users
        .filter((user) => user.id !== userInfo.id)
        .map((user) => (
          <OneUserInList key={user.id} user={user} />
        ))}
    </div>
  );
};

export default UsersList;
