import React from 'react';
import Dialogs from './Dialogs';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';
import { connect } from 'react-redux';

// function DialogsContainer(props) {
//     let state = props.store.getState().dialog;
//     function sendMessage() { props.store.dispatch(actionSendMessage()); }
//     function updateMessage(text) { props.store.dispatch(actionUpdateMessage(text)); }
//     return (
//         <Dialogs sendMessage={sendMessage} updateMessage={updateMessage} dialogsData={state.dialogsData} messagesData={state.messagesData} newMessageContent={state.newMessageContent} />
//     )
// }

let mapStateToProps = (state) => {    
    return {
        dialogsData: state.dialog.dialogsData,
        messagesData: state.dialog.messagesData, 
        newMessageContent: state.dialog.newMessageContent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(actionSendMessage());
        },
        updateMessage: (text) => {
            dispatch(actionUpdateMessage(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;