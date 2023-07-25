import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isloggedIn: false,
    socket: {},
    userInfo: { name: "", id: "" },
    users: [],
    current_chat: undefined,
    messages: [],
  },

  reducers: {
    login(state, action) {
      state.isloggedIn = action.payload;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    getUsers(state, action) {
      state.users = action.payload;
    },
    changeCurrent_chat(state, action) {
      state.current_chat = action.payload;
// debugger
      const newMessages = [...state.messages];
      // debugger
      console.log("newMessages:", newMessages);
      for (let i = 0; i < state.messages; i++) {
        if (newMessages[i].from === action.payload.id) {
          debugger
          newMessages[i].isRead = true;
        }
      }
      state.messages = newMessages;
      console.log("state.messages:", state.messages);
    },
    updateMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const {
  login,
  updateUserInfo,
  getUsers,
  changeCurrent_chat,
  updateMessages,
} = userSlice.actions;

export default userSlice.reducer;
