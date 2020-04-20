const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

function sendNewMessage(state){
    let newMassage = {
        id: state.messagesData.length,
        Message: state.newMessageContent
    }
    state.messagesData.push(newMassage);
    state.newMessageContent = "";
    return state;
}

function updateNewMEssage(state, text){
    state.newMessageContent = text;
    return state;
}

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
    switch (action.type) {
        case SEND_MESSAGE:
            return state = sendNewMessage(state);
        case UPDATE_MESSAGE:
            return state = updateNewMEssage(state, action.text)
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