import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    
    let dialogsData = [
        {id: 0, name: 'Andrew'},
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Mark'},
        {id: 4, name: 'Victor'}
    ];

    let messagesData = [
        {id: 0, Message: 'Hi, i`m Andrew'},
        {id: 1, Message: 'Hi, i`m Sasha'},
        {id: 2, Message: 'Hi, i`m Alex'},
        {id: 3, Message: 'Hi, i`m Mark'},
        {id: 4, Message: 'Hi, i`m Victor'}
    ]
    // let dialogArr = dialogsData.map(
    //     (x) => {
    //         return <Dialog Name={x.name} path={x.id}/>;
    //     }
    // )
    let dialogArr = dialogsData.map(x => (<Dialog Name={x.name} path={x.id}/>));
    let messageArr = messagesData.map(x => (<Message  Message={x.Message} id={x.id}/>));

    return (
        <div className={s.wrapper}>
            <div>
                {dialogArr}
            </div>
            <div className={s.MessageStack}>
                {messageArr}
            </div>
        </div>
    );
}

export default Dialogs;