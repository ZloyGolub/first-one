import Dialogs from './Dialogs';
import React from 'react';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthRedirect';

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

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let RedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirect(Dialogs));

// RedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

// let RedirectComponent = (props) => {    
//     if (this.props.isAuth === false) {
//         return <Redirect to={'/login'} />
//     }
//     return <Dialogs {...props}/>
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);

export default DialogsContainer;