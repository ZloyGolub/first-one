import React from 'react';
import './../App.css';
import navbarMod from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={navbarMod.navigation}>
            <div className={navbarMod.item}><a href="#">ProfileM</a></div>
            <div className={navbarMod.item}><a href="#">Mesages</a></div>
            <div className={navbarMod.item}><a href="#">Music</a></div>
            <div className={navbarMod.item}><a href="#">News</a></div>
            <div className={navbarMod.item}><a href="#">Setings</a></div>
        </nav>
    );
}

export default Navbar;