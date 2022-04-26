import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    status:null
}

export const fetchUser = createAsyncThunk("fetchUser",async() => {
    const response = await axios.get("http://localhost:3002/data");
    return response.data;
})

const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers: {
        [fetchUser.pending]:(state,action) => {
            state.status = "loading"
        },
        [fetchUser.fulfilled]: (state,action) => {
            state.status = "success";
            state.users = action.payload
        },
        [fetchUser.rejected]: (state,action) => {
            state.status = "failed"
        }
    }    
});

export default userSlice.reducer;