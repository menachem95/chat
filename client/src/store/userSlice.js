import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isloggedIn: false,
    socket: {},
    userInfo: { name: "", id: "", _id:"", },
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
    },
    updateMessages(state, action) {
      debugger
      state.messages =  action.payload;
    },
    // getMessages(state, action) {
    //   debugger
    //   state.messages =  [action.payload];
    // },
  },
});

export const {
  login,
  updateUserInfo,
  getUsers,
  changeCurrent_chat,
  updateMessages,
  getMessages,
} = userSlice.actions;

export default userSlice.reducer;
