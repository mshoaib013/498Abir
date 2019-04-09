import React from "react";
import ReactDOM from "react-dom";
import withFirebaseAuth from "react-auth-firebase";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
