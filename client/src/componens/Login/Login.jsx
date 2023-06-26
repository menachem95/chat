import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

import classes from "./Login.module.css";


const Login = ({login}) => {
  const [userName, setUserName] = useState("")
  
  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    login()
    
    
  }
 
  
  return (
    <div>
      <form >
        <input type="text" placeholder="שם משתמש" onChange={(e) => setUserName(e.target.value)} />
       
        <button onClick={onSubmitHandler}>{"התחבר"} </button>
      </form>
    </div>
  );
};

export default Login;
