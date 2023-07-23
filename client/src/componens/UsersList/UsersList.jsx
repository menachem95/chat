import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./UsersList.module.css";
import { changeDesination } from "../../store/userSlice";

const UsersList = ({ socket }) => {
  const { users, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const privateMessage = (desinationValue) => {
    // const desinationValue = e.target.desinationValue;
    console.log(desinationValue)
    // socket.on("privateMessage", desinationValue);
    socket.emit("send message", )
    console.log({type: "single", ...desinationValue})
    dispatch(changeDesination({type: "single", ...desinationValue}))
  };

  return (
    <div className={classes.main}>
      {users
        .filter((user) => user.id !== userInfo.id)
        .map((user) => (
          <div key={user.id} className={classes.user}>
            <button  onClick={() => privateMessage({id: user.id, name: user.name})}>
              {user.name}
            </button>
            {/* <h2>{user.id}</h2> */}
          </div>
        ))}
    </div>
  );
};

export default UsersList;
