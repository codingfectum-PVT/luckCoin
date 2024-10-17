import emotionStyled from "@emotion/styled";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PageWrapper = styled.div`
    background-color: #000000;
    min-height: 100vh;
    position: relative;
    z-index: 0;
`
const ButtonEX = emotionStyled(Button)`
    background-color: #ffffff;
    color: #000000;
    font-size: 20px;
    font-weight: 300;
    border: 2px solid #ffffff;
    border-radius: 3px;
    padding: 8px 30px;
    max-width: 200px;
    width: 100%;
    display: inline-block;
    
    &.margin{
        margin-right: 20px;

        @media(max-width: 455px){
            margin-right: 0px;
        }
    }
    &:hover{
        color: #ffffff;
        background: #000000;
    }
    &.transparent{
        color: #ffffff;
        background: unset;

        &:hover{
            color: #000000;
            background: #ffffff;
        }
    }
    &.gold{
        background: unset;
        background: linear-gradient(360deg, #DD9025, #FFE168);
        border: 0px solid #ffffff;
        width: 100%;
        max-width: 350px;
    }
`

export { PageWrapper, ButtonEX }