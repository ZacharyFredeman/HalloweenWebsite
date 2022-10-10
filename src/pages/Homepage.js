import React, {useState} from 'react'
import Sidebar from '../components/sidebar/Sidebar.js'
import Navbar from'../components/Navbar.js';
import Hero from'../components/HeroSection/Hero.js';
import Info from '../components/InfoSection/Info.js';
import { homeObjOne, homeObjOTwo, homeObjThree } from '../components/InfoSection/Data.js';
import Services from '../components/Services/Services.js';
import Footer from '../components/Footer/Footer.js';

const Homepage=()=> {
    const [isOpen, setIsOpen] = useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    };

    return(
        <section>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Info {...homeObjOne}/>
            <Info {...homeObjOTwo}/>
            <Info {...homeObjThree}/>
            <Services/>
            <Footer/>
        </section>
    );
};

export default Homepage;