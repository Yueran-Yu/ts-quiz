import styled from 'styled-components'
import {contextFont} from "../../App/App.styles";

export const ConditionWrapper = styled.form`
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 30px;
  min-width: 300px;
  width: 45%;
  display: flex;
  flex-direction: column;
  font-family: ${contextFont};
  @media screen and (max-width: 1000px) {
    width: 100%;
  }


  #category, #amount {
    margin: 10px 0;
    padding: 5px 0;
  }

  fieldset {
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #a5a5a5;

    legend {
      border: 1px solid #5565A7;
      padding: 3px 30px;
      font-size: 1rem;
      border-radius: 5px;
      margin: 0 20px;
    }
  }

  .input_radio {
    input {
      margin: 5px 0;
    }

    label {
      margin: 0 5px;
    }
  }

`