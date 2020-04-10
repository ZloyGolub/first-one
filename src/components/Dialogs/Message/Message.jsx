import React from 'react';
import s from './Message.module.css';

function Message(props) {
    return (
        <div>
            {props.Message}
        </div>
    );
}

export default Message;