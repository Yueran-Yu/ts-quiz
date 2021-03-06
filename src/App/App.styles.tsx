import styled from 'styled-components';
import {windowsSize} from "../windowSize";
import React from "react";

export const btnFont = "'Questrial', sans-serif"
export const contextFont = "'Roboto', sans-serif"

export const AppWrapper = styled.div`
  color: white;
  background-color: rgba(76, 89, 154, 0.85);
  margin: 20px;
  padding: 30px 20px;
  width: 80vw;
  border-radius: 10px;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (max-width: ${windowsSize.small} ) {
    width: 100vw;
    margin: 0;
    padding: 20px 0;
    border-radius: 0;
  }

  h1 {
    font-size: 55px;
    text-align: center;
    font-weight: 900;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.5);

    @media screen and (max-width: ${windowsSize.small} ) {
      font-size: 35px;
      text-align: center;
      font-weight: 600;
    }
  }
`

export const MainSection = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  color: midnightblue;
  padding: 30px 0;
  border-radius: 5px;
  background-color: white;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0 0 0;
    border-radius: 5px;
    padding: 20px;
    row-gap: 20px;
  }
  @media screen and (max-width: ${windowsSize.small}) {
    border-radius: 0;
  }
`

export const QuestionBoard = styled.div`
  padding: 10px 30px 0 30px;
  flex-direction: column;
  display: flex;
  min-height: 300px;
  min-width: 300px;
  width: 45%;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;

  .score {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
		align-items: center;
    background-image: linear-gradient(135deg, white, #e1fa90, #7187f5);
    padding: 3px 0;
		width: 100%;
    border-radius: 20px 20px;
		
    @media screen and (max-width: 1000px) {
      width: 100%;
    }

    @media screen and (max-width: ${windowsSize.small}) {
      margin-top:10px;
      min-width: 300px;
    }

    span {
      font-size: 1.6rem;
      color: orangered;
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: ${windowsSize.small}) {
    width: 100%;
    padding: 0 20px;

    .score {
      font-size: 1.2rem;
    }
  }

  h2 {
    color: rgb(56, 70, 140);
    font-size: 2rem;
    font-family: ${contextFont};
  }

  h3 {
    margin-top: 20px;
    font-size: 25px;
    color: #ae6001;
    font-family: ${contextFont};

    @media screen and (max-width: ${windowsSize.small}) {
      font-size: 16px;
    }
  }

  .start_btn {
    background-color: #ea8080;
    font-weight: bolder;
    font-size: 1.5rem;
    width: 90%;
    padding: 10px 20px;
    margin-bottom: 30px;
    border: none;
    color: white;
    border-radius: 5px;

    &:hover {
      background-color: #d73434;
    }
  }
`

export const CircleStyle = {
	height: "10vw",
	width: "10vw",
	position: "absolute",
	margin: "auto",
	left: "0",
	right: "0",
	top: "0",
	bottom: "0",
	textAlign: "center"
} as React.CSSProperties;