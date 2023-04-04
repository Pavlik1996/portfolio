import {NSkill} from './nskill/nskill'
import s from './NSkills.module.scss'
import sContainer from '../common/styles/Container.module.css'
import {Title} from '../common/component/title/Title'
import {Slide} from "react-awesome-reveal";

type ArrType = { name: string, precent: number }


export const NSkills = () => {


    const arr: ArrType[] = [
        {name: 'HTML', precent: 99},
        {name: 'CSS', precent: 99},
        {name: 'JavaScript', precent: 75},
        {name: 'React JS', precent: 100},
        {name: 'Redux', precent: 99},
        {name: 'Story-book', precent: 100},
        {name: 'Node JS', precent: 100},
        {name: 'Linux', precent: 100},
    ]

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <Slide>

                    <div className={s.skills}>
                        {
                            arr.map(el => {
                                return (
                                    <NSkill nameSkill={el.name} percent={el.precent}/>
                                )
                            })
                        }
                    </div>
                </Slide>

            </div>
        </div>


    )
}