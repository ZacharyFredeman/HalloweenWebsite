import React from 'react'
import { ButtonSt, ButtonRt } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, 
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElement';


const Info = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, primary, dark, dark2, buttonTo, buttonR}) => {
    let disButton;

    if(buttonR){
        disButton =(<ButtonRt 
        to={buttonTo}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
        >
            {buttonLabel}
        </ButtonRt>);
    }
    else{
        disButton = (<ButtonSt 
            to={buttonTo}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
            >
                {buttonLabel}
            </ButtonSt>);
    }
   
   
    return(
        <section>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    {disButton}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </section>
    );
};

export default Info;