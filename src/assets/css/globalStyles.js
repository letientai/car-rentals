import {createGlobalStyle} from "styled-components"
import styled from "styled-components";
const GlobalStyles = createGlobalStyle`
    body , html{
        margin : 0; 
        padding : 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }
    #root {
        overflow : hidden;
    }
    .app{
        background-color : #fafbfd;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
    :root{
        --background-btn-primary : #009548;
        --txt-primary-color : #00a550;
        --txt-title-color : #6e6e6e;
        --boder-color : #d8e0db;
        --hover-color : #00a550;
    }
    ul , li ,p{
        margin : 0;
        padding : 0;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #111;
    }
    .dFlex {
        display: flex;
        justify-content : space-between;
        align-items : center;
    }
    .button-styled {
        background-color : #FFFFFF;
        border : none;
        outline : none;
    }
    input {
        border : none;
        outline : none;
    }
    .active{
        display : block !important;
    }
    .disable{
        opacity : 0.6;
        preventDefault: true !important;
        pointer-events: none;
        cursor :  not-allowed !important;
        -webkit-touch-callout: none;/* iOS Safari */
        -webkit-user-select: none;  /* Safari */
        -khtml-user-select: none;   /* Konqueror HTML */
        -moz-user-select: none;     /* Old versions of Firefox */
            -ms-user-select: none;  /* Internet Explorer/Edge */
                user-select: none;  /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
    }
`
export const Button = styled.button`
    outline: none;
    border : none;
    cursor: pointer;
    background-color : transparent;
    color : #FFFFFF;
`
export default GlobalStyles;