import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login, updateUserInfo } from "../../../store/userSlice";

const Register = ({ socket, changeIsRegistered }) => {
 
  const nameRef = useRef();


 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userInfo = { name: nameRef.current.value, id: socket?.SocketId };
    socket.emit("register", userInfo)
    changeIsRegistered(true)
  };

  return (
   
      
       
      <form>
        <input autoFocus ref={nameRef} type="text" placeholder="שם משתמש" />
        <button onClick={onSubmitHandler}>{"הרשם"} </button>
        </form>
    
  );
};

export default Register;
