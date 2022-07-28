import { configureStore } from "@reduxjs/toolkit";

import driverReducer from "./slices/drivers";
import componentReducer from "./slices/components";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  drivers: driverReducer,
  components: componentReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["drivers", "components"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
