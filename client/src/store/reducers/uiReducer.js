import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  alert: {
    type: "",
    message: null,
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
  },
});

export const { setLoading, setAlert } = uiSlice.actions;

export default uiSlice.reducer;
