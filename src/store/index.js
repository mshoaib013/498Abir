import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxPromise from "redux-promise";
import rootReducer from "../reducers";

const persistConfig = {
  key: "rokkhi-admin-web",
  storage: storage,
  whitelist: ["loggedInUsedr"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(ReduxPromise))
);

export const persistor = persistStore(store);
