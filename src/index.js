import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { FavoriteProviderHandler } from "./components/store/favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const userReducer = (state = { name: "Max", age: 27 }, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload,
      };
      break;
  }
  return state;
};

const favoriteRedcuer = (state = {}, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ userReducer, favoriteRedcuer }),
  {},
  applyMiddleware(logger)
);

root.render(
  <Provider store={store}>
    <FavoriteProviderHandler>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteProviderHandler>
  </Provider>
);
