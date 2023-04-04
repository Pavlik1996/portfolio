import s from './About.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Title } from '../common/component/title/Title'
import {Slide} from "react-awesome-reveal";



export const About = () => {

    const textAbout = "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team."

    return (
        <div className={s.aboutBlock}>
            <Slide direction={'down'}>
                <Title title={'Know Me More'} />
            </Slide>
            <div className={`${sContainer.container} ${s.container}`}>
                <Slide direction={'left'}>
                    <div className={s.aboutDescription}>
                        <div>I'm <span className={s.fullNameColor}><b>Pavel Khrysto</b></span>, a Front-end Developer</div>
                        <p className={s.textAbout}>
                            {textAbout}
                        </p>
                    </div>
                </Slide>
                <Slide direction={'right'}>
                    <div className={s.aboutInfo}>
                        <p><b>Name:</b> Pavel Khrtso</p>
                        <div className={s.separator}></div>
                        <p><b>Email:</b> <a href={'miki2012miki@gmail.com'}>miki2012miki@gmail.com</a></p>
                        <div className={s.separator}></div>
                        <p><b>Age:</b>  27</p>
                        <div className={s.separator}></div>
                        <p><b>From:</b>  Belarus, Minsk</p>
                        <div className={s.button}>
                            <div className={s.cv}>Download CV</div>
                        </div>
                    </div>
                </Slide>
            </div>

        </div>
    )
}