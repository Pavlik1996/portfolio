import s from './About.module.scss'
import sContainer from '../common/styles/Container.module.css'
import { Title } from '../common/component/title/Title'

export const About = () => {

    const textAbout = "I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    return (
        <div className={s.aboutBlock}>
            <Title title={'Know Me More'} />
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.aboutDescription}>
                    <h2 >I'm <span className={s.fullNameColor}>Pavel Khrysto</span>, a web Developer</h2>
                    <p className={s.textAbout}>
                        {textAbout}
                    </p>
                </div>
                <div className={s.aboutInfo}>
                    <p><b>Name:</b> Pavel Khrtso</p>
                    <div className={s.separator}></div>
                    <p><b>Email:</b> <a href={'miki2012miki@gmail.com'}>miki2012miki@gmail.com</a></p>
                    <div className={s.separator}></div>
                    <p><b>Age:</b>  27</p>
                    <div className={s.separator}></div>
                    <p><b>From:</b>  Belarus, Minsk</p>
                    <div className={s.cv}>Download CV</div>
                </div>
            </div>
        </div>
    )
}