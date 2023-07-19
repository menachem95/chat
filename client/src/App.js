import React, { useEffect, useState, useRef } from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

// let users = [];

function App() {
  const { isloggedIn } = useSelector((state) => state.user);
  console.log(isloggedIn);
  return (
    <div>
      {isloggedIn ? <Chat socket={socket} /> : <Login socket={socket} />}
    </div>
  );
}

export default App;
