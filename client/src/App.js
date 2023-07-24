import React, {useEffect} from "react";
import Login from "./componens/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import Main from "./componens/Main/Main";
import Test from "./componens/Test/Test";
import { updateMessages } from "./store/userSlice";

const socket = io.connect("http://localhost:8080");

// let users = [];

function App() {
  const { isloggedIn, messages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(isloggedIn);
  useEffect(() => {
    socket.on("get message", (message) => {
      console.log(`message.content: ${message.content}`);
      dispatch(updateMessages([...messages, message]));
    });
  }, [messages]);
  return (
    <div>
      {isloggedIn ? (
        //  <Main socket={socket} />
        <Test socket={socket} />
      ) : (
        <Login socket={socket} />
      )}
    </div>
  );
}

export default App;
