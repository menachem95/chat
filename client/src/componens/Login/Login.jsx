import React,{ useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, updateUserInfo, getSocket } from "../../store/userSlice";
import io from "socket.io-client";

import classes from "./Login.module.css";


const Login = ({login, getName, getSocket}) => {
  const [userName, setUserName] = useState("")
  const [id, setId] = useState("")
  const dispatch = useDispatch();
  const nameRef = useRef();
  

  useEffect(()=>{
    const socket = io.connect("http://localhost:8080");
    socket.on("connect",async() => {
    
      setId(socket.id)
       console.log(id)
    })
    getSocket(socket);
  },[])
  const onSubmitHandler = (e) => {
    // const socket = io.connect("http://localhost:8080");
    // socket.on("connect",async() => {
    
    //   setId(socket.id)
    //    console.log(id)
    // })
    // getSocket(socket);
   
    
    
    dispatch(updateUserInfo({name: nameRef.current.value, id }))
    login()
    
    
  }
 
  
  return (
    <div>
      <form >
        <input autoFocus ref={nameRef} type="text" placeholder="שם משתמש"
        //  onChange={(e) => getName(e.target.value)}
          />
       
        <button onClick={onSubmitHandler}>{"התחבר"} </button>
      </form>
    </div>
  );
};

export default Login;
