import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    userPage: userReducer,
    auth: authReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;