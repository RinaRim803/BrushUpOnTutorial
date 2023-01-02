import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import user from "../reducers/userReducer";
import favorite from "../reducers/favoriteReducer";

export default store = createStore(
  combineReducers({ user, favorite }),
  {},
  applyMiddleware(logger)
);
