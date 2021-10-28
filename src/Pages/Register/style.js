import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  //background-image: url("./../../assets/image/background.jpg");

  .page {
    height: calc(100vh - 120px);
    display: flex;
    .formContainer {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 51%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    .imgContainer {
      width: 50%;
    }
  }
  footer {
    background-color: red;
    height: 120px;
  }
`;
