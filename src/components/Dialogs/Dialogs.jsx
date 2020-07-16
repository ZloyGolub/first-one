import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

function Dialogs(props) {

    // let dialogArr = dialogsData.map(
    //     (x) => {
    //         return <Dialog Name={x.name} path={x.id}/>;
    //     }
    // )
    let state = props.dialog;

    let dialogArr = state.dialogsData.map(x => (<Dialog Name={x.name} path={x.id} />));
    let messageArr = state.messagesData.map(x => (<Message Message={x.Message} id={x.id} />));

    function sendMessage(e) {
        props.sendMessage();
    }

    function onEnterPress(e) {
        if(e.keyCode === 13 && e.shiftKey === false)
        {
            props.sendMessage();
        }
    }

    function updateMessage(e){        
        let text = e.target.value;
        props.updateMessage(text);
    }

    if (props.isAuth === false) {
        return <Redirect to={'/login'}/>
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
                        <textarea 
                        onKeyDown={onEnterPress} 
                        value={state.newMessageContent}
                        onChange={updateMessage}
                        placeholder="Enter your message"></textarea>
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