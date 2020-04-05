import React from 'react';
import './../../App.css';
import HeaderMod from './Header.module.css';

function Header() {
    return (
        <header className={`${HeaderMod.Header} round-borders`}>
            <img src='https://dummyimage.com/1000x100/f0f0f0/aaa' />
        </header>
    );
}

export default Header;