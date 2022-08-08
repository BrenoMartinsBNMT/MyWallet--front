import styled from "styled-components";

export const MenuLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 75vw;
  height: 70vh;

  h2 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;

    color: #ffffff;
  }

  button {
    width: 90vw;
    height: 40px;

    margin: 10px;

    background: #a328d6;
    border-radius: 5px;
    border: none;
    outline: none;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #ffffff;
  }
`;

export const InputsLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    width: 85vw;
    height: 48px;

    margin: 10px;

    border-radius: 5px;
    border: none;
    outline: none;
  }

  input::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
`;
