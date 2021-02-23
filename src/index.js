import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { saveState } from "./store/localStorage";
import throttle from "lodash/throttle";
import App from "./App";
import { Provider } from "react-redux";

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
