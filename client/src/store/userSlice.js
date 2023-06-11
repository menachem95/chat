import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {},
    login: false,
    reducers: {
        login(state, action){
            state.login = true ? action.payload._id : false;
        }
    }
})

export default userSlice.reducer;