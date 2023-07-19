import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { login, updateUserInfo } from "../../store/userSlice";


const Login = ({ socket }) => {
  const dispatch = useDispatch();
  const nameRef = useRef();

  // useEffect(()=>{
  //   const socket = io.connect("http://localhost:8080");
  //   socket.on("connect",async() => {

  //     setId(socket.id)
  //      console.log(id)
  //   })
  //   getSocket(socket);
  // },[])
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userInfo = { name: nameRef.current.value, id: socket.id };
   
    socket.emit("login", userInfo);
   
    dispatch(updateUserInfo(userInfo));
    dispatch(login(true));
  };

  return (
    <div>
      <form>
        <input autoFocus ref={nameRef} type="text" placeholder="שם משתמש" />

        <button onClick={onSubmitHandler}>{"התחבר"} </button>
      </form>
    </div>
  );
};

export default Login;
