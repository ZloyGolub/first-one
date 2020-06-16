import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={s.header_styling}>
            <img src='https://dummyimage.com/1000x100/f0f0f0/aaa' />
            <div className={s.Login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;