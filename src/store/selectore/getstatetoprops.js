import { createSelector } from "reselect";

const store = (state) => state.shop;
export const selectShop = createSelector(store, (main) => main);

export const allState = createSelector(
  (state) => state,
  (res) => res
);

export const cost = (state) => {
  let som = 0;
  state.forEach((el) => (som += el.quantity * el.price));
  return som;
};
