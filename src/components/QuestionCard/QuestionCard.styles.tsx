import styled from 'styled-components';
import {btnFont} from "../../App/App.styles";
import {windowsSize} from "../../windowSize";


export const QuestionContainer = styled.div`
  border: 1px solid #bababa;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 20px;
  min-width: 300px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: ${windowsSize.small}) {
    min-width: 300px;
  }
	
  .number, .question_bottom {
    margin: 10px 0 20px 0;
    position: relative;
  }

  .number:after {
    position: absolute;
    content: "";
    padding-top: 8px;
    top: 100%;
    width: 100%;
    left: 0;
    border-bottom: 1px dashed #bab9b9;
  }

  .question {
    font-family: ${btnFont};
    margin: 15px 0;
    font-size: 1.2rem;
    padding: 10px 0;
    font-weight: 700;
  }

  .question_bottom:after {
    position: absolute;
    content: "";
    padding: 10px 0;
    width: 100%;
    left: 0;
    border-bottom: 1px dashed #bab9b9;

    @media screen and (max-width: ${windowsSize.small}) {
      padding: 8px 0;
    }
  }
`
export const AnswerWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

type Props = {
	isCorrect: boolean
	userClicked: boolean
}

export const ButtonWrapper = styled.button<Props>`
  padding: 10px 0;
  border: none;
  color: #081648;
  border-radius: 5px;
  background: ${({
                   isCorrect,
                   userClicked
                 }) =>
          isCorrect ? "linear-gradient(90deg, #7be3d5, #37a192)" :
                  !isCorrect && userClicked ?
                          "linear-gradient(90deg, #fca9a9, #f04848)" :
                          "linear-gradient(90deg, #b5c1ff, #8294f5)"};
`

export const NextBtn = styled.div`
  margin-top: 45px;
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: center;

  .next_btn {
    padding: 0 10px;
    text-align: center;
    width: 150px;
    height: 40px;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: block;
    border: 0;
    font-weight: 700;
    box-shadow: 0 0 14px -7px #f09819;
    background-image: linear-gradient(45deg, #6f81e0 0%, #5868b3 50%, #282f53 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    @media screen and (max-width: ${windowsSize.small}) {
      width: 120px;
      height: 30px;
			font-size: 12px;
    }
  }

  .next_btn:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  .next_btn:active {
    transform: scale(0.95);
  }
`
