import { createStore } from "redux";
import { redusers } from "./reduxStore";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";


let initialState = {
    dialogsData: [
        { id: 0, name: 'Andrew' },
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Mark' },
        { id: 4, name: 'Victor' }
    ],
    messagesData: [
        { id: 0, Message: 'Hi, i`m Andrew' },
        { id: 1, Message: 'Hi, i`m Sasha' },
        { id: 2, Message: 'Hi, i`m Alex' },
        { id: 3, Message: 'Hi, i`m Mark' },
        { id: 4, Message: 'Hi, i`m Victor' }
    ],
    newMessageContent: ""
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    
    };
    debugger
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMassage = {
                id: state.messagesData.length,
                Message: state.newMessageContent
            }
            state.messagesData.push(newMassage);
            state.newMessageContent = "";
            return state;
        }
        case UPDATE_MESSAGE:{
            state.newMessageContent = action.text;
            return state;
        }
        default: return state;
    }
}


export const actionSendMessage = () => {
    return { type: SEND_MESSAGE }
}

export const actionUpdateMessage = (text) => {
    return { type: UPDATE_MESSAGE, text: text }
}


export default dialogReducer;