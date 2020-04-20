import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let redusers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer
});

let store = createStore(redusers);

export default store;