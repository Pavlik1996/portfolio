import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={''}>Home</a>
            <a href={''}>About</a>
            <a href={''}>What I Do</a>
            <a href={''}>Contact</a>
        </div>
    );
};

