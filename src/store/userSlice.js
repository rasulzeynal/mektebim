import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    status:null,
    error:"",
    selectedUser:{}
}

export const fetchUser = createAsyncThunk("fetchUser",async() => {
    const response = await axios.get("http://localhost:3002/data");
    return response.data;
})


const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers: {
        [fetchUser.pending]:(state) => {
            state.status = "loading"
        },
        [fetchUser.fulfilled]: (state,action) => {
            state.status = "success";
            state.users = action.payload
        },
        [fetchUser.rejected]: (state) => {
            state.status = "failed"
        }
    }    
});

export default userSlice.reducer;