import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ui from "./ui";
import shop from "./shop";
import shopItems from "./shopItem";
import get from "./get";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "shop", "shopItems", "get"],
};

const rootReducer = combineReducers({
  ui,
  shop,
  shopItems,
  get,
});

export default persistReducer(persistConfig, rootReducer);
