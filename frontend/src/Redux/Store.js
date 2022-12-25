import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { courseReducer } from "./course/course.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  User: userReducer,
  Course: courseReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
