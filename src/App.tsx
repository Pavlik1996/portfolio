import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Remote} from "./remote_work/remote";
import {Contact} from "./contact/contact";
import {Footer} from "./footer/footer";
import { About } from './about/About';
import { NSkills } from './nskills/NSkills';

function App() {
    return (
        <div className="App">
            {/* <Header/> */}
            <Main/>
            <About/>
            {/* <Skills/> */}
            <NSkills/>
            <Works/>
            <Remote/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
