import React from "react";
import { TrickContainer, TrickContent, TrickBg, TrickP, TrickImage, TrickLogo, TrickWrap } from "./TrickElements";
import image from '../../images/ghost.jpg'
const Trick=() =>{
    return(
        <TrickContainer>
            <TrickWrap>
                <TrickLogo to="/">Halloween</TrickLogo>
                <TrickContent>
                    <TrickImage src={image} alt='ghost'/>
                    <TrickP>
                        Aaaahhhhh, Scary ghost..........
                        Wait never mind they seem friendly
                    </TrickP>
                </TrickContent>
            </TrickWrap>
        </TrickContainer>
    );
};

export default Trick;