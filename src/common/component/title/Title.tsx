import s from './title.module.scss'

type PropsType = {
    title: string
}

export const Title= (props: PropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
            <div className={s.line}></div>
        </div>
    )
}