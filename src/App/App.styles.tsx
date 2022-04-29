import styled from 'styled-components';

export const AppWrapper = styled.div`
  color: white;
  background-color: rgba(76, 89, 154, 0.9);
  margin: 20px;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  h1 {
    font-size: 55px;
    text-align: center;
    font-weight: 900;
  }
`

export const MainSection = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: space-evenly;
  margin: 20px;
  color: midnightblue;
  padding: 30px;
  border-radius: 10px;
`

export const QuestionBoard = styled.div`
	padding:20px;
	margin:20px;
`