import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { loggedIn: false },

  reducers: {
    login(state, action) {
        
      state.loggedIn = true ? action.payload : false;
    },
  },
});


export const {
    login
  } = userSlice.actions;

export default userSlice.reducer;
