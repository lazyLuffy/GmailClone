import { configureStore } from "@reduxjs/toolkit";

import mailReducer from "../features/mailSlice";
import userSlice from "../features/userSlice";

import {combineReducers} from "redux"
const reducer = combineReducers({
  mail: mailReducer,
  user:userSlice
});
export const store = configureStore({
  reducer
});
