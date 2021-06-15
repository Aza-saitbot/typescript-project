import React from 'react';
import s from './Tabs.module.css';
import {NavLink} from "react-router-dom";

const Tabs = () => {


    return <div className={s.tabs}>
        <NavLink className={s.tab} to="/profile/:userId?">Profile</NavLink>
        <NavLink className={s.tab} to="/dialogs">Dialogs</NavLink>
        <NavLink className={s.tab} to="/users">Friends</NavLink>
        <NavLink className={s.tab} to="/login">Login</NavLink>
    </div>
}

export default Tabs;

