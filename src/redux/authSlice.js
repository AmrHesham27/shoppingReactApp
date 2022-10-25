import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload["user"];
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
