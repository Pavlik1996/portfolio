import React from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import mainPhoto from '../assets/images/catmain.jpg'
import { Nav } from '../nav/Nav';

export const Main = () => {

    const backgroundImage = {
        backgroundImage: `url(${mainPhoto})`
    }
    return (
        <div className={s.mainBlock} style={backgroundImage}>
            <div className={s.nav}>
                <Nav />
            </div>
            <div className={s.container}>
                <div className={s.welcome}>Welcome</div>
                <div className={s.fullName}>I'm
                    <span>Pavel Khrytso</span>
                </div>
                <span>based in Los Angeles, California.</span>
            </div>
        </div>
    )
}



// import React from 'react';
// import s from './Main.module.scss'
// import sContainer from '../common/styles/Container.module.css'
// import { Nav } from '../nav/Nav';
// import mainPhoto from '../assets/images/catmain.jpg'

// export const Main = () => {

//     const backgroundImage = {
//         backgroundImage: `url(${mainPhoto})`
//     }

//     return (
//         <div className={s.mainBlock} style={backgroundImage}>
//             <div className={s.nav}>
//                 <Nav />
//             </div>
//             <div className={s.container}>
//                 <div className={s.text}>
//                     <span>Welcome</span>
//                     <h1>I am
//                         <span className={s.colorFullName}>Pavel Khrysto</span>
//                     </h1>
//                     <p>A Front-End Developer</p>
//                     <p>based in Belarus, Minsk / Poland, Warszawa</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

