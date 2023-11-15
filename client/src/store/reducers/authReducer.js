import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authAction";

const initialState = {
  user: {},
  loading: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    // add cases for login api calls
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
    // add cases for other api calls
    // like builder.addCase
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
