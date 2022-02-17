import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    currentUser : null,
    isFetching: false,
    error: false,
    name: ''
};

const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    loginStart : (state) => {
        state.isFetching = true
    },
    loginSuccess : (state,action) => {
        state.isFetching = false;
        state.currentUser = action.payload.currentUser;
        state.name = action.payload.username
    },
    loginFailure : (state) => {
        state.isFetching = false;
        state.error = true
    }
    },
});

const { actions, reducer } = userSlice;
export const {loginFailure,loginStart,loginSuccess } = actions;
export default reducer;
