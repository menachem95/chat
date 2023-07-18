import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

import classes from "./Login.module.css";


const Login = ({login, setUserInfo}) => {
  const [userName, setUserName] = useState("")
  
  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    login()
    
    
  }
 
  
  return (
    <div>
      <form >
        <input type="text" placeholder="שם משתמש" onChange={(e) => setUserInfo({name: e.target.value, id: ""})} />
       
        <button onClick={onSubmitHandler}>{"התחבר"} </button>
      </form>
    </div>
  );
};

export default Login;
