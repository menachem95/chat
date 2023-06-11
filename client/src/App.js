import React, {useEffect} from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";
import { useSelector } from "react-redux";



function App() {
  const {loggedIn} = useSelector((state) => state.user)
  useEffect(() =>{
    console.log(loggedIn)
  }, [loggedIn])
  
  console.log(loggedIn)
  return <div>{loggedIn ? <Chat /> : <Login />}</div>;
}

export default App;
