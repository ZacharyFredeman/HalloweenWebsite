import React from "react";
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";
import Icon1 from "../../images/pumpkin.svg"
import Icon2 from "../../images/horrormovie.svg"
import Icon3 from "../../images/donut.svg"
const Services = () =>{
    return(
        <ServicesContainer id="ideas">
            <ServicesH1>
                Halloween Ideas
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src ={Icon1}/>
                    <ServicesH2>Carve Pumpkins</ServicesH2>
                    <ServicesP>
                        See who can make the scariest pumpkins.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Icon2}/>
                    <ServicesH2>Watch Scary Movies</ServicesH2>
                    <ServicesP>
                        I suggest "The Evil Dead"!
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src ={Icon3}/>
                    <ServicesH2>Make Fall Snacks</ServicesH2>
                    <ServicesP>
                        Hard to beat apple cider donuts.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;