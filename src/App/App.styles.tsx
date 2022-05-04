import styled from 'styled-components';
import {windowsSize} from "../windowSize";

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
  justify-content: center;
  column-gap: 50px;
  margin: 20px;
  color: midnightblue;
  padding: 30px;
  border-radius: 5px;
  background-color: white;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0 0 0;
    border-radius: 0;
    padding: 20px;
    row-gap: 20px;

  }
`

export const QuestionBoard = styled.div`
  padding: 0 30px;
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

  @media screen and (max-width: 1000px) {
    width: 100%;


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