import React from 'react';
import s from './Works.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Work } from "./work/Work";
import { Title } from '../common/component/title/Title';
import reactImage from '../assets/images/reactjs.svg'
import cat from '../assets/images/cat.jpg'


export const Works = () => {

    const FrontEnd = {
        backgroundImage: `url(${cat})`
    };

    const BackEnd = {
        backgroundImage: `url(${reactImage})`
    };


    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <Title title={'My works'} />
                <div className={s.works}>
                    <Work style={FrontEnd} title={'Todo'} description={'todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo '} />
                    <Work style={FrontEnd} title={'Sotial network'} description={'Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sotial network Sot'} />
                </div>
            </div>
        </div>
    );
};

