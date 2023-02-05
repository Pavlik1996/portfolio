import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet architecto consequatur consequuntur debitis deleniti deserunt, doloremque ducimus ea fugit iusto molestiae officiis praesentium, quas quidem rem sint velit veniam!'}/>
                    <Skill title={'TS'} description={'description'}/>
                    <Skill title={'REACT'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

