import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isloggedIn: true,
    socket: {},
    userInfo: { name: "", id: "" },
    users: [ { name: '1', id: 'm_zBUUeW5DKsztuJAAAB' },
    { name: '2', id: 'JcUsoxtSRPnJ7t7OAAAC' },
    { name: '3', id: '-BDNoor4_vPbN7NyAAAD' }],
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
