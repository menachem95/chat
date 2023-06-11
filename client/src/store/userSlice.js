import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { loggedIn: false, id: "" },

  reducers: {
    login(state, action) {
      state.loggedIn = true ? action.payload : false;
      state.id = action.payload._id;
    },
  },
});


export const {
    login
  } = userSlice.actions;

export default userSlice.reducer;
