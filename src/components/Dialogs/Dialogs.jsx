import React from 'react';
import DialogsMod from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    let path = "/messages/" + props.path;

    return (
    <div>        
        <NavLink activeClassName={DialogsMod.active_member} to={path}>{props.Name}</NavLink>
    </div>
    );
}

function Message(props) {
    return (
        <div>
            {props.Message}
        </div>
    );
}

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
        <div className={DialogsMod.wrapper}>
            <div className={DialogsMod.Members}>
                {dialogArr}
            </div>
            <div className={DialogsMod.MessageStack}>
                {messageArr}
            </div>
        </div>
    );
}


export default Dialogs;