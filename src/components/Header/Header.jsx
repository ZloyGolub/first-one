import React from 'react';
import s from './Header.module.css';

function Header(props) {
    return (
        <header className={s.header_styling}>
            <img src='https://dummyimage.com/1000x100/f0f0f0/aaa' />
        </header>
    );
}

export default Header;