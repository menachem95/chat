import React, { useEffect, useState, useRef } from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: "", id: "" });

  const login = () => {
    setIsLogin(true);
  };

  const updetUserId = (data) => {
    console.log(data)
    setUserInfo({...userInfo, id: data});
  };

  const updetUserName = (data) => {
    console.log(data)
    setUserInfo({...userInfo, userName: data});
  };

  console.log(isLogin);
  return (
    <div>
      {isLogin ? (
        <Chat userInfo={userInfo} updetUserId={updetUserId} />
      ) : (
        <Login login={login} updetUserName={updetUserName} />
      )}
    </div>
  );
}

export default App;
