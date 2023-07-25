import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./UsersList.module.css";
import { changeCurrent_chat, getUsers } from "../../../store/userSlice";

const OneUserInList = ({user}) => {
  const { users, userInfo, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onClickHandler = (data) => {
    dispatch(changeCurrent_chat(data))
  }
  return  <div key={user.id} className={classes.user}>
  <button
    onClick={() =>
      onClickHandler({ id: user.id, name: user.name })
    }
  >
    {user.name}
  </button>
  {/* <h2>{user.id}</h2> */}
  {messages.filter((message) => message.from === user.id).length}
</div>
}

const UsersList = ({ socket }) => {
  const { users, userInfo, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
const onClickHandler = (data) => {
  dispatch(changeCurrent_chat(data))
}

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
          <OneUserInList user={user} />
          // <div key={user.id} className={classes.user}>
          //   <button
          //     onClick={() =>
          //       onClickHandler({ id: user.id, name: user.name })
          //     }
          //   >
          //     {user.name}
          //   </button>
          //   {/* <h2>{user.id}</h2> */}
          //   {messages.filter((message) => message.from === user.id).length}
          // </div>
        ))}
    </div>
  );
};

export default UsersList;
