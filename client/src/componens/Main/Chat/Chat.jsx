import classes from "./Chat.module.css";
import React, { useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../../Message/Message";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "../../../store/userSlice";
import { getTime } from "../../../utils/utils";
import EVENTS from "../../../utils/events";

const Chat = ({ socket }) => {
  const { userInfo, users, current_chat, messages } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const contentRef = useRef();



  console.log("messages:", messages);
  const sendMessage = () => {
    const message = {
      date: getTime(),
      content: contentRef.current.value,
      from: userInfo._id,

      to: { id: current_chat.id, _id: current_chat._id },
    };
    socket.emit(EVENTS.SEND_MESSAGE, message, (m) => {
      dispatch(updateMessages([...messages,m]));
    });
    contentRef.current.value = "";
  };

 

  return (
    <div className={classes.main}>
      {current_chat ? (
        <ScrollToBottom className={classes.chat} initialScrollBehavior="auto">
          {messages
            .filter(
              (message) =>
                message.from === current_chat._id ||
                message.to === current_chat._id
            )
            .map((data, i) => {
              return (
                <Message
                  key={i}
                  data={data}
                  yourId={userInfo._id}
                  isLast={i === messages.length - 1}
                />
              );
            })}
          <div className={classes.footer}>
            <input
            style={{direction:"rtl", unicodeBidi:"bidi-override",}}
              autoFocus
              type="text"
              ref={contentRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <div
              onClick={sendMessage}
              className={`material-icons ${classes.send_icon}`}
            >
              &#xe163;
            </div>
          </div>
        </ScrollToBottom>
      ) : (
        <div>בחר משתמש</div>
      )}
    </div>
  );
};

export default Chat;
