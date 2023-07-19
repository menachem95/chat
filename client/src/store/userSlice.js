import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isloggedIn: false,
    socket: {},
    userInfo: { name: "", id: "" },
    users: [],
  },

  reducers: {
    login(state, action) {
      state.isloggedIn = action.payload;
    },
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    getUsers(state, action) {
      state.users = action.payload
    }
  },
});

export const { login, updateUserInfo, getUsers } = userSlice.actions;

export default userSlice.reducer;
