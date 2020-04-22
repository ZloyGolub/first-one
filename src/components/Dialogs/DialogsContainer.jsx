import React from 'react';
import Dialogs from './Dialogs';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';

function DialogsContainer(props){

    let state = props.store.getState().dialog;

    function sendMessage(){
        props.store.dispatch(actionSendMessage());
    }

    function updateMessage(text){
        props.store.dispatch(actionUpdateMessage(text));
    }


    return(
        <Dialogs
            sendMessage={sendMessage}
            updateMessage={updateMessage}
            dialogsData={state.dialogsData}
            messagesData={state.messagesData}
            newMessageContent={state.newMessageContent}
        />
    )
}

export default DialogsContainer;