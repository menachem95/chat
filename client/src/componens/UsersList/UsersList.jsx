import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./UsersList.module.css";
import { changeCurrent_chat } from "../../store/userSlice";

const UsersList = ({ socket }) => {
  const { users, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
const onClickHandler = (data) => {
  dispatch(changeCurrent_chat(data))
}

  return (
    <div className={classes.main}>
      {users
        .filter((user) => user.id !== userInfo.id)
        .map((user) => (
          <div key={user.id} className={classes.user}>
            <button
              onClick={() =>
                onClickHandler({ id: user.id, name: user.name })
              }
            >
              {user.name}
            </button>
            {/* <h2>{user.id}</h2> */}
          </div>
        ))}
    </div>
  );
};

export default UsersList;
