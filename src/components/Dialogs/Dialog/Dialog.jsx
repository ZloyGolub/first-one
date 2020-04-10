import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

function Dialog(props) {
    let path = "/messages/" + props.path;

    return (
    <div className={s.Members}>        
        <NavLink activeClassName={s.active_member} to={path}>{props.Name}</NavLink>
    </div>
    );
}

export default Dialog;