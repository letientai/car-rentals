import {createGlobalStyle} from "styled-components"
import styled ,{keyframes}from "styled-components";
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
    @font-face {
        display: block;
      }
    :root{
        --background-btn-primary : #009548;
        --txt-primary-color : #00a550;
        --txt-title-color : #6e6e6e;
        --boder-color : #d8e0db;
        --hover-color : #00a550;
        --nav-height : 60px;
        --height-layout-search-top : 44px;
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
        user-select: none; 
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
    .arrow-up {
        position: absolute;
        top: -6px;
        width: 0; 
        height: 0; 
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 7px solid #fff;
    }
    @keyframes pouring-effect {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`
export const Button = styled.button`
    outline: none;
    border : none;
    cursor: pointer;
    background-color : transparent;
    color : #FFFFFF;
`
export const pouringEffect = keyframes`
    from{
        opacity: 0;
        transform: scale(0);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`

export default GlobalStyles;