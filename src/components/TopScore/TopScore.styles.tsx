import styled from "styled-components";
import {windowsSize} from "../../windowSize";
import {btnFont, contextFont} from "../../App/App.styles";

export const TopScoreWrapper = styled.div`
  background-color: aliceblue;
  padding: 15px 5px 5px 5px;
  border-radius: 5px;
  color: #063164;
  font-family: ${btnFont};
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px;

  div {
    margin: 10px 0;
  }

  span {
    color: #c63939;
    font-weight: bolder;
    text-shadow: 1px 0 1px rgb(224, 154, 79);
  }

  @media screen and (max-width: ${windowsSize.small} ) {
    font-family: ${btnFont};
    margin: 0;

    h4 {
      font-size: 16px;
    }

    span {
      font-family: ${contextFont};
    }
  }
`