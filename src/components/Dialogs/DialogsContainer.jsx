import React from 'react';
import Dialogs from './Dialogs';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}

let forDispatch = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(actionSendMessage());
        },
        updateMessage: (text) => {
            dispatch(actionUpdateMessage(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, forDispatch)(Dialogs);

export default DialogsContainer;