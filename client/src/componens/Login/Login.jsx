import React,{ useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

import classes from "./Login.module.css";


const Login = () => {
  const dispatch = useDispatch()
  const nameRef = useRef();
  const passwordRef = useRef();
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: nameRef.current.value,
        password: passwordRef.current.value,
      })
    });
    const loginData = await data.json();
    console.log(loginData);
    dispatch(login(loginData))
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="שם משתמש" ref={nameRef} />
        <input type="password" placeholder="סיסמא" ref={passwordRef} />
        <button onClick={onLogin}>{"התחבר"} </button>
      </form>
    </div>
  );
};

export default Login;
