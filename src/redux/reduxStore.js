import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";

let redusers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    userPage: userReducer
});

let store = createStore(redusers);

window.store = store;

export default store;