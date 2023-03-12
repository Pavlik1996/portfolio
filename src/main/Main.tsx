import React from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import mainPhoto from '../assets/images/catmain.jpg'
import { Nav } from '../nav/Nav';

export const Main = () => {

    const backgroundImage = {
        backgroundImage: `url(${mainPhoto})`
    }
    return (
        <div className={s.mainBlock} style={backgroundImage}>
            <div className={s.nav}>
                <Nav />
            </div>
            <div className={s.container}>
                <div className={s.welcome}>Welcome</div>
                <span className={s.fullName}>I'm
                    <span>&nbsp;Pavel</span>&nbsp;
                    <span>Khrytso</span>
                </span>
                <span>based in Los Angeles, California.</span>
            </div>
        </div>
    )
}

