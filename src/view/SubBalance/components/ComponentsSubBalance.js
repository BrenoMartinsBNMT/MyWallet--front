import styled from "styled-components";

export const DivSubBalance = styled.div`
  width: 90vw;
  height: 80vh;
`;

export const Title = styled.div`
  padding-bottom: 25px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const FormSubBalance = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;

  input {
    background: #ffffff;
    border-radius: 5px;
    height: 6vh;
    border: none;
    outline: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  input::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  button {
    background: #a328d6;
    border-radius: 5px;
    height: 6vh;
    border: none;
    outline: none;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
`;
