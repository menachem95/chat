import React from "react";
import Chat from "./componens/Chat/Chat";
import Login from "./componens/Login/Login";

const loggedIn = false;

function App() {
  return (
    <div>
      {loggedIn ? <Chat /> : <Login />}
  
    </div>
  );
}

export default App;
