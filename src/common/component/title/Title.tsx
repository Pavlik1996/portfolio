import s from './title.module.scss'
import {Slide} from "react-awesome-reveal";

type PropsType = {
    title: string
}

export const Title= (props: PropsType) => {
    return (
        <Slide direction={'down'}>
            <div className={s.title}>
                <h2>{props.title}</h2>
                <div className={s.line}></div>
            </div>
        </Slide>

    )
}