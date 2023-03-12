import s from './Footer.module.scss'
import sContainer from '../common/styles/Container.module.css'


export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={s.container}>
        <div>
          Copyright © 2023
          <span>Pavel Khrysto</span>
          . All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
