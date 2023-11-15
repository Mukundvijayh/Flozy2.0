import { createAsyncThunk } from "@reduxjs/toolkit";
import { agenciesService } from "../services/agenciesService";
import { setLoading } from "../reducers/uiReducer";
import { parseErrorResponses } from "../../utils/responseParser";

export const getAgencies = createAsyncThunk(
  "agencies/getAgencies",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading("Logging Agencies..."));
      const response = await agenciesService.getAgencies(data);
      dispatch(setLoading(null));
      return response?.data;
    } catch (err) {
      dispatch(setLoading(null));
      parseErrorResponses(err?.response || err, dispatch);
      return rejectWithValue(err);
    }
  }
);
