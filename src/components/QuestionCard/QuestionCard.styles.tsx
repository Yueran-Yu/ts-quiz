import styled from 'styled-components';
import {btnFont} from "../../App/App.styles";


export const QuestionContainer = styled.div`
  border: 1px solid #bababa;
  border-radius: 5px;
  min-height: 50px;
  margin: 10px 0;
  padding: 10px 20px;
  max-width: 400px;

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
  line-height: 10px;
  padding: 8px 0;
  color: #3737c8;
  border-radius: 5px;
  background: ${({
                   isCorrect,
                   userClicked
                 }) =>
          isCorrect ? "linear-gradient(90deg, #56FFA4, #59BC86)" :
                  !isCorrect && userClicked ?
                          "linear-gradient(90deg, #fca9a9, #ff6666)" :
                          "linear-gradient(90deg, #56ccff, #6eafb4)"};
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
    background-image: linear-gradient(45deg, #6dc4bb 0%, #1f8f82 50%, #186960 100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
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
