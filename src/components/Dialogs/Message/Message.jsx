import React from 'react';
import s from './Message.module.css';

function Message(props) {
    return (
        <div className={s.MessageStack}>
            {props.Message}
        </div>
    );
}

export default Message;