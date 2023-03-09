import s from './NSkill.module.scss'

type PropsType = {
    nameSkill: string
    percent: number
}

export const NSkill = (props: PropsType) => {

    return (
        <div className={s.container}>
            <div className={s.info}>
                <span>{props.nameSkill}</span>
                <span>{props.percent} %</span>
            </div>
            <div className={s.rating}>
                <div className={s.filld} style={{width: `${props.percent}%`}}></div>
            </div>
        </div>
    )
}