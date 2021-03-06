import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={s.navigation}>
            <div className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/messages">Messages</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/users">Users</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;