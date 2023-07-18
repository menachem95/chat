import React, { useEffect, useState, useRef } from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";
import io from "socket.io-client";

// const socket = io.connect("http://localhost:8080");

// let users = [];

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [socket, setSocket] = useState();
  // const [userInfo, setUserInfo] = useState({ name: "", id: socket.id });

  const login = () => {
    setIsLogin(true);
  };

  const getSocket = (s) => {
    setSocket(s)
  }

  

  // socket.on("getUsers", (usersList) => {
  //   console.log(usersList);
  //   // users = usersList;
  //   // console.log(users, "users");
  // });

  console.log(isLogin);
  return (
    <div>
      {isLogin ? (
        <Chat socket={socket} />
      ) : (
        <Login login={login} getSocket={getSocket}/>
      )}
    </div>
  );
}

export default App;
