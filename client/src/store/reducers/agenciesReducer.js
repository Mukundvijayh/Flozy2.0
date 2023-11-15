import { createSlice } from "@reduxjs/toolkit";
import { getAgencies } from "../actions/agenciesAction";

const initialState = {
  list: {
    results: [],
    headers: [],
    pagination: {
      count: 0,
      next: null,
      previous: null,
      page_size: 5,
      num_pages: 0,
      page_number: 1,
    },
    search: "",
    filter: {
      params: "",
      rules: [{ index: 0, field: "", operator: "", value: "" }],
    },
    ordering: "agency_name",
    orderBy: [{ field: "agency_name", label: "ASC: Agency Name" }],
  },
  loading: null,
};

export const agenciesSlice = createSlice({
  name: "agencies",
  initialState,
  reducers: {
    setPageSize(state, action) {
      state.list.pagination.page_size = action.payload;
    },
    setPage(state, action) {
      state.list.pagination.page_number = action.payload;
    },
    setSearch(state, action) {
      state.list.pagination.page_number = 1;
      state.list.search = action.payload;
    },
    setOrdering(state, action) {
      state.list.ordering = action.payload;
    },
    addFilterRule(state, action) {
      state.list.filter.rules.push({
        index: (Math.max(state.list.filter.rules.map((m) => m.index)) || 0) + 1,
        field: "",
        operator: "",
        value: "",
      });
    },
    removeFilterRule(state, action) {
      state.list.filter.rules = state.list.filter.rules.filter(
        (f) => f.index !== action.payload
      );
    },
    updateFilterRule(state, action) {
      state.list.filter.rules = state.list.filter.rules.map((m) => {
        if (m.index === action.payload.index) {
          return action.payload;
        }
        return m;
      });
    },
    applyFilter(state, action) {
      state.list.pagination.page_number = 1;
      state.list.filter.params = action.payload;
    },
    clearFilter(state) {
      state.list.pagination.page_number = 1;
      state.list.filter.params = "";
      state.list.filter.rules = [{ index: 0, field: "", value: "" }];
    },
  },
  extraReducers: (builder) => {
    // add cases for getAgencies api calls
    builder
      .addCase(getAgencies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAgencies.fulfilled, (state, { payload }) => {
        state.list = {
          ...state.list,
          ...payload,
        };
        state.loading = false;
      })
      .addCase(getAgencies.rejected, (state) => {
        state.loading = false;
      });
    // add cases for other api calls
    // like builder.addCase
  },
});

export const {
  setPage,
  setPageSize,
  setSearch,
  setOrdering,
  addFilterRule,
  removeFilterRule,
  updateFilterRule,
  applyFilter,
  clearFilter,
} = agenciesSlice.actions;

export default agenciesSlice.reducer;
