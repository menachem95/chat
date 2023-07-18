import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    socket: {},
    userInfo: { name: "", id: "" },
    users: [],
  },

  reducers: {
    login(state, action) {
      state.loggedIn = true ? action.payload : false;
      // state.id = action.payload._id;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    getSocket(state, action) {
      state.socket = action.payload.socket;
    },
  },
});

export const { login, updateUserInfo, getSocket } = userSlice.actions;

export default userSlice.reducer;
