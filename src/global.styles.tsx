import {createGlobalStyle} from "styled-components";

const BGImage = require("./assets/images/77.jpg");

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    position: relative;
    min-height: 100%;
    z-index: -2;
    align-items: center;

    &:before {
      content: "";
      background-size: initial;
      -o-background-size: initial;
      -moz-background-size: initial;
      -webkit-background-size: initial;
      position: absolute;
      background-image: url(${BGImage});
      background-repeat: repeat;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      filter: blur(6px);
      -webkit-filter: blur(6px);
    }
  }
`
