import styled from 'styled-components';

type Props = {
	isCorrect: boolean
	userClicked: boolean
}
export const ButtonWrapper = styled.button<Props>`
  background: ${({
                   isCorrect,
                   userClicked
                 }) =>
          isCorrect ? "linear-gradient(90deg, #56FFA4, #59BC86)" :
                  !isCorrect && userClicked ?
                          "linear-gradient(90deg, #FF5656, #C16868)" :
                          "linear-gradient(90deg, #56ccff, #6eafb4)"};
`