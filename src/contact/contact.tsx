import React from 'react';
import s from './contact.module.css'
import sContainer from '../common/styles/Container.module.css'
export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.contacts}>Контакты</div>
                <div className={s.interaction}>
                    <input/>
                    <input/>
                    <textarea/>
                </div>
                <div className={s.send}>Отправить</div>
            </div>
        </div>
    );
};

