import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { actionSendMessage, actionUpdateMessage } from '../../redux/dialogReducer';

function Dialogs(props) {

    // let dialogArr = dialogsData.map(
    //     (x) => {
    //         return <Dialog Name={x.name} path={x.id}/>;
    //     }
    // )
    let dialogArr = props.state.dialogsData.map(x => (<Dialog Name={x.name} path={x.id} />));
    let messageArr = props.state.messagesData.map(x => (<Message Message={x.Message} id={x.id} />));

    function sendMessage() {
        props.dispatch(actionSendMessage());
    }

    function onEnterPress(e) {
        if(e.keyCode == 13 && e.shiftKey == false)
        {
            props.dispatch(actionSendMessage());
        }
    }

    function updateMessage(e){        
        let text = e.target.value;
        props.dispatch(actionUpdateMessage(text));
    }

    return (
        <div className={s.wrapper}>
            <div>
                {dialogArr}
            </div>
            <div>
                <div>
                    {messageArr}
                </div>
                <div>
                    <div>
                        <textarea onKeyDown={onEnterPress} value={props.state.newMessageContent}
                         onChange={updateMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;