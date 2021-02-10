import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    add: (state, { payload: { id, price, name, imageUrl } }) => {
      state.push({ id, price, imageUrl, name, quantity: 1 });
    },
    remove: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    incressItem: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      state[index].quantity++;
    },
    decressItem: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload.id);
      state[index].quantity > 0 ? state[index].quantity-- : null;
    },
  },
});
export const { add, remove, incressItem, decressItem } = slice.actions;
export default slice.reducer;
