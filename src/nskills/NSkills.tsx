import { NSkill } from './nskill/nskill'
import s from './NSkills.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Title } from '../common/component/title/Title'
import { Slide } from 'react-awesome-reveal'

type ArrType = { name: string; precent: number }

export const NSkills = () => {
	const arr: ArrType[] = [
		{ name: 'HTML', precent: 80 },
		{ name: 'CSS', precent: 80 },
		{ name: 'JavaScript', precent: 80 },
		{ name: 'React JS', precent: 100 },
		{ name: 'Redux', precent: 100 },
		{ name: 'Story-book', precent: 100 },
		{ name: 'RTK-query', precent: 80 },
		{ name: 'Next - Js', precent: 80 },
		{ name: 'Node - Js', precent: 10 },
		{ name: 'Linux', precent: 80 }
	]

	return (
		<div className={s.skillsBlock} id={'skills'}>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<Title title={'Skills'} />
				<Slide>
					<div className={s.skills}>
						{arr.map(el => {
							return <NSkill nameSkill={el.name} percent={el.precent} />
						})}
					</div>
				</Slide>
			</div>
		</div>
	)
}
