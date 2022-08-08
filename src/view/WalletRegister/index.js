import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  DivContent,
  Transactions,
  UpBar,
  TransactionsHistory,
  InfosTransactions,
} from "./components/WalletRegister";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function WalletRegister() {
  let localTokenLogin = localStorage.getItem("tokenLogin");
  let navigate = useNavigate();
  let [infosTransactions, setinfosTransactions] = useState();

  useEffect(() => {
    console.log(localTokenLogin);
    let promisse = axios.post(
      "https://mywallet-typescript.herokuapp.com/transactions-history",
      {
        token: localTokenLogin,
      }
    );

    promisse.then((element) => {
      setinfosTransactions(element.data);
    });
  }, []);

  function logout() {
    axios
      .post("https://mywallet-typescript.herokuapp.com/logout", {
        token: localTokenLogin,
      })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch(() => {
        alert("estamos com problemas técnicos!!");
      });
  }

  return (
    <DivContent>
      {!infosTransactions ? (
        <TailSpin />
      ) : (
        <>
          {" "}
          <UpBar>
            <p>Olá, {infosTransactions.infosBalance.name}</p>
            <span className="material-symbols-outlined" onClick={logout}>
              logout
            </span>
          </UpBar>
          <TransactionsHistory>
            <div>
              {!infosTransactions.transactionsFormated ? (
                <div className="no-transactions">
                  <p>Não há registros de entrada ou saída</p>
                </div>
              ) : (
                infosTransactions.transactionsFormated.infosTransactions.map(
                  (element, index) => {
                    return (
                      <InfosTransactions key={index}>
                        <div className="infos">
                          <p>{element.date}</p>
                          <span>{element.description}</span>
                        </div>
                        <p className={element.type}>{element.value}</p>
                      </InfosTransactions>
                    );
                  }
                )
              )}
            </div>
            <div className="balance">
              <span>Saldo:</span>
              {infosTransactions.infosBalance.balance >= 0 ? (
                <span className="add">
                  {infosTransactions.infosBalance.balance}
                </span>
              ) : (
                <span className="subs">
                  {infosTransactions.infosBalance.balance}
                </span>
              )}
            </div>
          </TransactionsHistory>
          <div className="buttons-trasactions">
            <Link to="/adicionar-saldo">
              <Transactions>
                <span className="material-symbols-outlined">add_circle</span>
                <p>Nova entrada</p>
              </Transactions>
            </Link>
            <Link to="/retirar-saldo">
              <Transactions>
                <span className="material-symbols-outlined">
                  do_not_disturb_on
                </span>
                <p>Nova saída</p>
              </Transactions>
            </Link>
          </div>
        </>
      )}
    </DivContent>
  );
}
