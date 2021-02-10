import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "fetch",
  initialState: {
    data: [],
    loading: false,
    errorMessage: null,
  },
  reducers: {
    get: (state, action) => {
      state.data.push(action.payload.data);
    },
    loading: (state, action) => {
      state.loading = action.payload.value;
    },
    catchError: (state, action) => {
      state.errorMessage = action.payload.err;
    },
  },
});

export const { get, loading, catchError } = slice.actions;

export default slice.reducer;
