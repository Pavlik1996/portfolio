import React from 'react';
import s from './footer.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Items} from "./items/Items";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div>Pavel Khrysto</div>
                <div className={s.items}>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                </div>
                <div>@ 2023 All rights reserved</div>
            </div>
        </div>
    );
};

