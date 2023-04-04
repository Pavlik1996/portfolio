import s from './Footer.module.scss'
import linkedin from '../assets/images/icon/li.png'
import github from '../assets/images/icon/gi.png'
import facebook from '../assets/images/icon/fa.png'
import instagram from '../assets/images/icon/in.png'
import telegram from '../assets/images/icon/tg.png'
import twitter from '../assets/images/icon/tw.png'
import {Slide} from "react-awesome-reveal";


export const Footer = () => {


    return (
        <div className={s.footerBlock}>

            <div className={s.container}>
                <Slide>
                    <div>
                        Copyright © 2023&nbsp;
                        <span>Pavel Khrysto</span>
                        . All Rights Reserved.
                    </div>
                </Slide>

                <Slide direction={'right'}>
                    <div className={s.icons}>
                        <a href="https://www.linkedin.com/in/pavel-khrysto/" target="_blank">
                            <img src={linkedin} alt="linkedin" className={s.icon}/>
                        </a>
                        <a href="https://github.com/Pavlik1996" target="_blank">
                            <img src={github} alt="linkedin" className={s.icon}/>
                        </a>
                        <a href="https://t.me/maykay1" target="_blank">
                            <img src={telegram} alt="linkedin" className={s.icon}/>
                        </a>
                        <a href="https://twitter.com/pablo_khrysto" target="_blank">
                            <img src={twitter} alt="linkedin" className={s.icon}/>
                        </a>
                        <a href="https://www.facebook.com/pabl0.ph" target="_blank">
                            <img src={facebook} alt="linkedin" className={s.icon}/>
                        </a>
                        <a href="https://www.instagram.com/pablo_khrysto" target="_blank">
                            <img src={instagram} alt="linkedin" className={s.icon}/>
                        </a>
                    </div>
                </Slide>


            </div>
        </div>
    )
}
