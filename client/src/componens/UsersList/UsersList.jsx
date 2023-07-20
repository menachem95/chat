import React from "react";
import { useSelector } from "react-redux";
import classes from "./UsersList.module.css"

const UsersList = () => {
  const { users } = useSelector((state) => state.user);

  return(
  <div className={classes.main}>
    {users.map((user) => (
      <div key={user.id} className={classes.user}>
        <span >{user.name}</span>
        {/* <h2>{user.id}</h2> */}
      </div>
    ))}
  </div>);
};

export default UsersList;
