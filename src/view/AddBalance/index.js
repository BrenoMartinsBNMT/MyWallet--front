import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  DivAddBalance,
  Title,
  FormAddBalance,
} from "./components/componentsAddBalance";

export default function AddBalance() {
  let regexMoney = /^[0-9]{1,5},[0-9]{0,2}$/;
  let navigate = useNavigate();
  let [value, setValue] = useState();
  let [description, setDescription] = useState();
  let token = localStorage.getItem("tokenLogin");
  return (
    <DivAddBalance>
      <Title>
        <p>Nova Entrada</p>
      </Title>
      <FormAddBalance
        onSubmit={(element) => {
          element.preventDefault();
          if (regexMoney.test(element.target[0].value)) {
            if (!value || !description) {
              alert("preencha os campos corretamente");
            } else {
              axios
                .post(
                  "https://mywallet-typescript.herokuapp.com/transactions/addBalance",
                  {
                    balance: parseFloat(value.replace(",", ".")),
                    token,
                    description,
                  }
                )
                .then(() => {
                  alert("Entrada adicionada com sucesso!");
                  setTimeout(() => {
                    navigate("/carteira", { replace: true });
                  }, 1000);
                })
                .catch(() => {
                  alert("houve algum erro ao completar a transação :(");
                });
            }
          } else {
            alert("Por Favor insira um valor no formato 12345,67");
          }
        }}
      >
        <input
          type="text"
          placeholder="Valor"
          onChange={(element) => {
            setValue(element.target.value);
          }}
        />
        <input
          type="text"
          placeholder="descrição"
          onChange={(element) => {
            setDescription(element.target.value);
          }}
        />
        <button type="submit">Salvar entrada</button>
      </FormAddBalance>
    </DivAddBalance>
  );
}
