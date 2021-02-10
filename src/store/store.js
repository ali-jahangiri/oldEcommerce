import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";
import reducer from "./root";

const store = configureStore({
  reducer,
});
const persistore = persistStore(store);
export default { store, persistore };
