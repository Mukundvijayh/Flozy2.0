import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import { setLoading } from "../reducers/uiReducer";
import { parseErrorResponses } from "../../utils/responseParser";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading("Logging In..."));
      const response = await authService.login(data);
      dispatch(setLoading(null));
      return response?.data;
    } catch (err) {
      dispatch(setLoading(null));
      parseErrorResponses(err?.response || err, dispatch);
      return rejectWithValue(err);
    }
  }
);
