import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Skill } from "./skill/Skill";
import { Title } from '../common/component/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
                    <Skill title={'TS'} description={'description'} />
                    <Skill title={'TS'} description={'description'} />
                    <Skill title={'TS'} description={'description'} />
                    <Skill title={'REACT'} description={'description'} />
                    <Skill title={'REACT'} description={'description'} />
                </div>
            </div>
        </div>
    );
};

