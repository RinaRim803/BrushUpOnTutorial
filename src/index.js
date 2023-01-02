import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import store from "./components/store/store";
import App from "./App";
import { FavoriteProviderHandler } from "./components/store/favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <FavoriteProviderHandler>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteProviderHandler>
  </Provider>
);
