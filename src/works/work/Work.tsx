import React from 'react';
import s from './Work.module.scss'

type PropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}


export const Work = (props: PropsType) => {
    return (
        <div className={s.work}>
            <div className={s.content} style={props.style}>
                <a className={s.see}>Смотреть</a>
            </div>
            <div className={s.workInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

