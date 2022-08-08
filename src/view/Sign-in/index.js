import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MenuLogin, InputsLoginDiv } from "./components/ComponentsSign-in";
export default function SignIn() {
  let navigate = useNavigate();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  function login() {
    let promisse = axios.post(
      "https://mywallet-typescript.herokuapp.com/login",
      {
        email,
        password,
      }
    );

    promisse
      .then((element) => {
        localStorage.setItem("tokenLogin", `${element.data.token}`);
        navigate("/carteira", { replace: true });
      })
      .catch((element) => {
        alert(element.response.data);
      });
  }

  return (
    <MenuLogin>
      <h2>MyWallet</h2>
      <InputsLoginDiv>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(element) => setEmail(element.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(element) => setPassword(element.target.value)}
        />
      </InputsLoginDiv>
      <button onClick={login}>Entrar</button>
      <Link to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </MenuLogin>
  );
}
