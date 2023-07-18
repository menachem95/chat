import React, { useEffect, useState, useRef } from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: "", id: "" });

  const login = () => {
    setIsLogin(true);
  };

  console.log(isLogin);
  return (
    <div>
      {isLogin ? (
        <Chat userInfo={userInfo} socket={socket} />
      ) : (
        <Login login={login} setUserInfo={setUserInfo} />
      )}
    </div>
  );
}

export default App;
