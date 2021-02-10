import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    showCard: null,
  },
  reducers: {
    showCardShop: (state) => {
      state.showCard = !state.showCard;
    },
  },
});
export const { showCardShop } = slice.actions;
export default slice.reducer;
