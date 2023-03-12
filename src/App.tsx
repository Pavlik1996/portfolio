import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Remote} from "./remote_work/remote";
import { About } from './about/About';
import { NSkills } from './nskills/NSkills';
import { ContactNew } from './contact/ContactNew';
import { Footer } from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Main/>
            <About/>
            <NSkills/>
            <Works/>
            <ContactNew/>
            <Footer/>
        </div>
    );
}

export default App;
