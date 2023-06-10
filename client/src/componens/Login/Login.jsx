import { useRef } from "react";

import classes from "./Login.module.css";


const Login = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const onLogin = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: nameRef.current.value,
        password: passwordRef.current.value,
      })
    });
    const login = await data.json();
    console.log(login);
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
