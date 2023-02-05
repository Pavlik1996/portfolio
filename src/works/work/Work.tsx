import React from 'react';
import s from './Work.module.css'

type PropsType = {
    title: string
    description: string
}


export const Work = (props: PropsType) => {
    return (
        <div className={s.work}>
            <div className={s.content}>
                <div className={s.see}>Смотреть</div>
            </div>
                <span className={s.title}>{props.title}</span>
                <span className={s.description}>{props.description}</span>
        </div>
    );
};

