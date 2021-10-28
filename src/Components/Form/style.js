import styled from "styled-components";

export const FormContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: cornflowerblue;
  border-radius: 7px;
  position: relative;
  button {
    border-radius: 7px;
    height: 30px;
    width: 200px;
    text-transform: uppercase;
    color: white;
    background-color: purple;
    border: none;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
