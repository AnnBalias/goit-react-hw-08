import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filterReduser } from "./filters/slice";

const persistConfig = {
  key: "contacts-persist",
  version: 1,
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReduser),
    filter: filterReduser,
    // auth: persistedReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
