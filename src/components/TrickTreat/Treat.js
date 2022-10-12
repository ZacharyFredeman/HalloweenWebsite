import React from "react";
import { TreatLogo, TreatImage, TreatContainer, TreatContent, TreatP, TreatWrap} from "./TreatElements";
import image from '../../images/dog.jpg'

const Treat=() =>{
    return(
        <TreatContainer>
            <TreatWrap>
                <TreatLogo to='/'>Halloween</TreatLogo>
                <TreatContent>
                    <TreatImage src= {image} alt="DOG"/>
                    <TreatP>
                        Ooooooo, A spooky ghost dog
                        wishing you Happy Halloween
                    </TreatP>
                </TreatContent>
            </TreatWrap>
        </TreatContainer>
    );
};

export default Treat;