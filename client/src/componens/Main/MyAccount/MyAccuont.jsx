import React from "react";
import classes from "./MyAccuont.module.css"
import { useSelector } from "react-redux";

const MyAccount = () => {
  const { userInfo } = useSelector((state) => state.user);

  return <div className={classes.main}>{userInfo.name}</div>;
};

export default MyAccount;
