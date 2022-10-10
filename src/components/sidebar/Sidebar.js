import React from "react";
import {SidebarContainer, CloseIcon, Icon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper} from './SidebarElements.js'

const Sidebar= ({isOpen, toggle})=>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to= 'trick' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to= 'treat' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to= 'signup' onClick={toggle}>
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to= "/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;