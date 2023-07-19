import React from "react";
import { useSelector } from "react-redux";

const UsersList = () => {
  const { users } = useSelector((state) => state.user);

  return(
  <>
    {users.map((user) => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.id}</h2>
      </div>
    ))}
  </>);
};

export default UsersList;
