import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    display: flex;
    flex-direction: column-reverse;
    padding: 15px;
    span {
      margin-bottom: 5px;
    }
    input {
      outline: none;
      height: 30px;
      border-radius: 7px;
      border: none;
      padding-left: 15px;
      &:focus::placeholder {
        color: transparent;
        transition: 0.2s all linear;
      }
    }
  }
`;
