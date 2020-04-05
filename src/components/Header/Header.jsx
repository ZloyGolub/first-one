import React from 'react';
import HeaderMod from './Header.module.css';

function Header() {
    return (
        <header className={HeaderMod.header_styling}>
            <img src='https://dummyimage.com/1000x100/f0f0f0/aaa' />
        </header>
    );
}

export default Header;