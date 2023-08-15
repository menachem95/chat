import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login, updateUserInfo, updateMessages } from "../../../store/userSlice";

const Login = ({ socket, changeIsRegistered }) => {
  
  const dispatch = useDispatch();
  const nameRef = useRef();

  // useEffect(()=>{
  //   const socket = io.connect("http://localhost:8080");
  //   socket.on("connect",async() => {

  //     setId(socket.id)
  //      console.log(id)
  //   })
  //   getSocket(socket);
  // },[])
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // const userInfo = { name: nameRef.current.value };

    socket.emit("login", nameRef.current.value, (userInfo, messages) => {
      console.log(userInfo)
      dispatch(updateUserInfo(userInfo));
      dispatch(updateMessages( messages));
     
    });

    
    dispatch(login(true));
  };

 

  return (
    
        <div>
          <form>
            <input autoFocus ref={nameRef} type="text" placeholder="שם משתמש" />

            <button onClick={onSubmitHandler}>{"התחבר"} </button>
          </form>
        </div>
     
  );
};

export default Login;
