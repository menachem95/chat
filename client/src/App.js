import React, { useEffect } from "react";
import Login from "./componens/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import Main from "./componens/Main/Main/Main";

import { updateMessages } from "./store/userSlice";

const socket = io.connect("http://localhost:8080");

function App() {
  const { isloggedIn, messages, users, current_chat } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  console.log(isloggedIn);
  
  useEffect(() => {
    socket.once("get message", (message) => {
      console.log(`message.content: ${message.content}`);
      const newMessages = [...messages, {...message, isRead: message.isRead || current_chat?.id === message.from ? true : false}]
      dispatch(updateMessages(newMessages));
     
    });
  }, [messages]);

  return (
    <div>
      {isloggedIn ? <Main socket={socket} /> : <Login socket={socket} />}
    </div>
  );
}

export default App;
