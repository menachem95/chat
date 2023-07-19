import React from "react";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Main from "./componens/Main/Main";
import Test from "./componens/Test/Test";

const socket = io.connect("http://localhost:8080");

// let users = [];

function App() {
  const { isloggedIn } = useSelector((state) => state.user);
  console.log(isloggedIn);
  return (
    <div>
      {isloggedIn ?
      //  <Main socket={socket} /> 
       <Test />
       : <Login socket={socket} />}
    </div>
  );
}

export default App;
