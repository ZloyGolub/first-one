import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReduser from "./authReduser";

let redusers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    userPage: userReducer,
    auth: authReduser
});

let store = createStore(redusers);

window.store = store;

export default store;