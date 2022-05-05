import styled from 'styled-components'
import {contextFont, btnFont} from "../../App/App.styles";
import {windowsSize} from "../../windowSize";


export const LeaderWrapper = styled.div`
  background-color: #7da494;
  padding: 20px;
  margin: 20px;
  text-align: center;
  border-radius: 5px;

  @media screen and (max-width: ${windowsSize.small} ) {
    padding: 2px 10px;
    margin: 20px 10px 10px 10px;
  }

  h1 {
    font-size: 3rem;
    margin: 20px 0;
    font-family: ${contextFont};
    text-shadow: 4px 4px 0 rgba(0,0,0,0.2);

    @media screen and (max-width: ${windowsSize.small} ) {
      font-size: 2rem;
      margin: 8px 0;
    }
  }

  div {
    margin: 20px 0;
    font-size: 1.3rem;
    font-family: ${btnFont};
    @media screen and (max-width: ${windowsSize.small} ) {
      font-size: 1rem;
      margin: 5px 0;
    }
  }
`