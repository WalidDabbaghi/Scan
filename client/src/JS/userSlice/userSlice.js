import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//**********register user***********************
export const userRegister = createAsyncThunk("user/register", async (user) => {
    //const { apiClient } = extra;
    try {
        let response = await axios.post("http://localhost:5000/user/register", user);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});

//**********login user***********************
export const userLogin = createAsyncThunk("user/login", async (user) => {
    //const { apiClient } = extra;
    try {
        let response = await axios.post("http://localhost:5000/user/login", user);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});

//**********cuurent user***********************
export const userCurrent = createAsyncThunk("user/current", async () => {
    //const { apiClient } = extra;
    try {
        let response = await axios.get("http://localhost:5000/user/current", {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        status: "idle",
        error: null,
    },
    reducers: {
        logout: (state, action) => {
            state.data = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder

            //**********register user***********************
            .addCase(userRegister.pending, (state) => {
                state.status = "loading";
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.newUserToken
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            //**********login user***********************
            .addCase(userLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.user;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            //**********current user***********************
            .addCase(userCurrent.pending, (state) => {
                state.status = "loading";
            })
            .addCase(userCurrent.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.user;
            })
            .addCase(userCurrent.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

    },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer;

// code from Redux Toolkit
