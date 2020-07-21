import Dialogs from './Dialogs';
import React from 'react';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialog: state.dialog
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(Dialogs)

// let RedirectComponent = AuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);

// export default DialogsContainer;