import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, Heroh1, HeroBtnWrapper, ArrowFoward, ArrowRight } from './HeroElements';
import Video from '../../Video/Spookypumpkin.mp4';
import { ButtonSt } from '../ButtonElements.js';

const Hero = ()=>{
    const[hover, setHover] = useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

    return(
        <HeroContainer id ='home'>
            <HeroBg>
                <VideoBg autoPlay={true} loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <Heroh1>
                    Happy Halloween
                </Heroh1>
                <HeroP>
                    Ready to be scared?
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonSt to="about" 
                      onMouseEnter={onHover} 
                      onMouseLeave={onHover}
                      primary='true'
                      dark='true'
                      smooth="true" duration={500} spy={true} exact='true' offset={-80}
                    >
                        Get Started {hover ? <ArrowFoward/> : <ArrowRight/>}
                    </ButtonSt>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;