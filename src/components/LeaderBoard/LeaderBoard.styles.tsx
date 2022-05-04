import styled from 'styled-components'
import {contextFont,btnFont} from "../../App/App.styles";


export const LeaderWrapper = styled.div`
  background-color: #7da494;
  padding: 20px;
  margin: 20px;
  text-align: center;
  border-radius: 5px;

  h1 {
    font-size: 3rem;
    margin: 20px 0;
    font-family: ${contextFont};
  }

  div {
    margin: 20px 0;
    font-size: 1.3rem;
    font-family: ${btnFont};
  }
`