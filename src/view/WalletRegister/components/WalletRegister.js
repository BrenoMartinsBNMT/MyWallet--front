import styled from "styled-components";

export const DivContent = styled.div`
  .buttons-trasactions {
    display: flex;
    justify-content: space-between;

    margin-top: 10px;
  }
  a {
    text-decoration: none;
  }
`;

export const UpBar = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

export const TransactionsHistory = styled.div`
  width: 85vw;
  height: 70vh;
  padding-top: 25px;
  background-color: #ffffff;
  border-radius: 5px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #868686;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .no-transactions {
    width: 80vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .balance {
    display: flex;
    padding: 8px;
    justify-content: space-between;
  }
  .add {
    color: #03ac00;
  }
  .subs {
    color: #c70000;
  }
  div {
    overflow: scroll;
  }
`;
export const InfosTransactions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  .infos {
    display: flex;

    justify-content: space-between;
  }
  span {
    margin-left: 10px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    word-break: break-word;

    text-align: start;
  }
`;
export const Transactions = styled.button`
  display: flex;
  background: #a328d6;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  flex-direction: column;
  justify-content: space-between;
  width: 35vw;
  height: 15vh;
  padding: 5px;
`;
