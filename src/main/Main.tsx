import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Pavel Khrysto</h1>
                    <p>A Front-End Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

