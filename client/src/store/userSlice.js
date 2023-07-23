import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isloggedIn: false,
    socket: {},
    userInfo: { name: "", id: "" },
    users: [],
    current_chat: { type: "", id: "", name: "" },
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
  },
});

export const {
  login,
  updateUserInfo,
  getUsers,
  changeCurrent_chat,
} = userSlice.actions;

export default userSlice.reducer;
