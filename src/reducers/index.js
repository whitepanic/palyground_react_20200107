import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./auth";
import data from "./data";
import reporter from "./reporter";

const reducers = combineReducers({
  routing: routerReducer,
  reporter,
  auth,
  data
});

export default reducers;
