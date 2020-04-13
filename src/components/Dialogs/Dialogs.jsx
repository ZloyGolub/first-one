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
    let dialogArr = props.state.dialogsData.map(x => (<Dialog Name={x.name} path={x.id} />));
    let messageArr = props.state.messagesData.map(x => (<Message Message={x.Message} id={x.id} />));

    let messageContent = React.createRef();

    function sendMessage() {
        let text = messageContent.current.value;
        alert(text);
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
                        <textarea ref={messageContent}></textarea>
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