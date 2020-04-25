import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {

    // let dialogArr = dialogsData.map(
    //     (x) => {
    //         return <Dialog Name={x.name} path={x.id}/>;
    //     }
    // )
    debugger
    let state = props.dialog;

    let dialogArr = state.dialogsData.map(x => (<Dialog Name={x.name} path={x.id} />));
    let messageArr = state.messagesData.map(x => (<Message Message={x.Message} id={x.id} />));

    function sendMessage() {
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
                        <textarea onKeyDown={onEnterPress} value={props.newMessageContent}
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