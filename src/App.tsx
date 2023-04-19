import React from 'react';
import './App.css';
import {Main,} from "./main/Main";
import {Works} from "./works/Works";
import {About} from './about/About';
import {NSkills} from './nskills/NSkills';
import {ContactNew} from './contact/ContactNew';
import {Footer} from './footer/Footer';
import {Nav} from "./nav/Nav";

function App() {
    return (
        <div className="App">
            <Nav/>
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
