import React, {useEffect, useState} from "react";
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from '../components/NavElements';
import{FaBars} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
//import { scrollToTop, scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";
import{animateScroll as scroll} from 'react-scroll';


const Navbar=({toggle})=>{
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    const toggleHome= ()=>{
        scroll.scrollToTop()
    }

    return(
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    Halloween
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= 'about' smooth="true" duration={500} spy={true} exact='true' offset={-80}>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'trick' smooth="true"duration={500} spy={true} exact='true' offset={-80}>Trick</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'treat' smooth="true" duration={500} spy={true} exact='true' offset={-80}>Treat</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'ideas' smooth="true" duration={500} spy={true} exact='true' offset={-80}>Ideas</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= '/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;