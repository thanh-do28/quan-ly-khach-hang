import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import createRegister from "./user/createRegister";
import loginUser from "./user/loginUser";
const persistConfig = {
  key: "data",
  storage,
};

export const rootReducers = combineReducers({
  createRegister,
  loginUser,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: { persistedReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
