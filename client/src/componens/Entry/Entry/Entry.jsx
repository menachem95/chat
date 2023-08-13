import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Entry = ({socket}) => {
  const [isRegistered, setIsRegistered] = useState(false);
console.log(socket.id)

  const changeIsRegistered = (value) => {
    setIsRegistered(value)
  }
return (<div>
 <Login changeIsRegistered={changeIsRegistered} socket={socket} />
  <Register socket={socket} changeIsRegistered={changeIsRegistered} /></div>
)};

export default Entry;
