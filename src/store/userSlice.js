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

export const postUser = createAsyncThunk("postUser",
    async (post) => await axios.post("data/http://localhost:3002/data",post));

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        createdUser: (state,action) => {
            state.users = [...state.users,action.payload];
        },
    },
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
        },
        [postUser.fulfilled]: (state,action) => {
            state.users = [...state.data,action.payload.data ]
            state.status = "yuklendi"
        }
    }    
});

export const {selectedUser,createdUser} = userSlice.actions
export default userSlice.reducer;