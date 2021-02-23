import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers";
import { loadState } from "./localStorage";
import thunkMiddleware from "redux-thunk";

const persistedState = loadState();
const store = createStore(
  rootReducers,
  persistedState,
  applyMiddleware(thunkMiddleware)
);

export default store;
