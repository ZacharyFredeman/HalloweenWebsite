import styled from "styled-components";
import { Link } from "react-router-dom";

export const TrickContainer = styled.div`
    min-height: 629px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(54, 54, 45, 1) 0%,
        rgba(235, 92, 56, 1) 100%
    );
`;

export const TrickBg = styled.div`
    background: #232a34;
    width: 100%;
    height: 100%;
`
export const TrickContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const TrickP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const TrickImage = styled.img`
    width: 50%;
    height: 50%;
    background: #232a34;
`;

export const TrickLogo= styled(Link)`
    marging-left: 32px;
    margin-top: 32px;
    padding: 30px 50px;
    text-decoration: none;
    color: #f57e42;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const TrickWrap= styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;