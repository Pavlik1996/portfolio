import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href={''}>Home</a>
            <Link
                to={'about'}
                activeClass={s.nav}
                spy={true}
                smooth={true}
            >
                About me
            </Link>
            <Link
                to={'skills'}
                activeClass={s.nav}
                spy={true}
                smooth={true}
            >
                Skills
            </Link>
            <Link
                to={'works'}
                activeClass={s.nav}
                spy={true}
                smooth={true}
            >
                My works
            </Link>
            <Link
                to={'contact'}
                activeClass={s.nav}
                spy={true}
                smooth={true}
            >
                Contact
            </Link>


        </div>
    );
};

