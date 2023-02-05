import React from 'react';
import s from './remote.module.css'
import sContainer from '../common/styles/Container.module.css'


export const Remote = () => {
    return (
        <div className={s.remote}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h3 className={s.title}>Рассматриваю варианты удаленной работы!</h3>
                <div className={s.text}>Нанять меня</div>
            </div>
        </div>
    );
};

