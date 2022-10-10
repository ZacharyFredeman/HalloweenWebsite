import React from "react";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, Footerhlink } from "./FooterElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer= () => {

    const toggleHome= ()=>{
        scroll.scrollToTop()
    }

    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/signin'>Sign up</FooterLink>
                            <FooterLink to='/signin'>Sign in</FooterLink>
                            <FooterLink to='/signin'></FooterLink>
                            <FooterLink to='/signin'>Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Resources</FooterLinkTitle>
                            <Footerhlink href='https://www.pexels.com/video/spooky-jack-o-lantern-computer-animation-9867271/' target="_blank">
                                Video
                            </Footerhlink>
                            <Footerhlink href="https://undraw.co/" target="_blank" aria-label="unDraw">
                                Images
                            </Footerhlink> 
                            <Footerhlink href="https://www.pexels.com/photo/dog-on-ghost-costume-during-halloween-9423706/" target="_blank">
                                ImageTreat
                            </Footerhlink>
                            <Footerhlink href="https://www.pexels.com/photo/ghosts-holding-a-carved-pumpkin-5435309/" target="_blank">
                                ImageTrick
                            </Footerhlink>
                            <Footerhlink href="https://fontawesome.com/" target="_blank">
                                Icons
                            </Footerhlink>
                            <Footerhlink href="https://www.youtube.com/watch?v=Nl54MJDR2p8" target="_blank">
                                Tutorial
                            </Footerhlink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect</FooterLinkTitle>
                            <SocialIcons>
                            <SocialIconLink href="https://github.com/ZacharyFredeman" target="_blank" aria-label="Facebook">
                                <FaGithub/>
                            </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                            <SocialIconLink href="https://www.linkedin.com/in/zachary-fredeman/" target="_blank" aria-label="Facebook">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Halloween
                        </SocialLogo>
                        <WebsiteRights>
                            Ⓒ {new Date().getFullYear()} Allrights Reserved
                        </WebsiteRights>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer