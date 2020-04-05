import React from 'react';
import navbarMod from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={navbarMod.navigation}>
            <div className={navbarMod.item}><NavLink activeClassName={navbarMod.active} to="/profile">Profile</NavLink></div>
            <div className={navbarMod.item}><NavLink activeClassName={navbarMod.active} to="/messages">Messages</NavLink></div>
            <div className={navbarMod.item}><NavLink activeClassName={navbarMod.active} to="/music">Music</NavLink></div>
            <div className={navbarMod.item}><NavLink activeClassName={navbarMod.active} to="/news">News</NavLink></div>
            <div className={navbarMod.item}><NavLink activeClassName={navbarMod.active} to="/settings">Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;