import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuSignUpDiv, InputSignUp } from "./components/ComponentsSign-up";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SingUp() {
  let [email, setEmail] = useState();
  let [nome, setNome] = useState();
  let [senha, setSenha] = useState();
  let [confirmPassword, setConfirmPassword] = useState();
  let [borderStyle, setBorderStyle] = useState();

  let navigate = useNavigate();

  function cadastrar() {
    if (senha === confirmPassword) {
      let promisse = axios.post("http://localhost:4000/signUp", {
        email,
        name: nome,
        password: senha,
      });
      promisse.then((element) => {
        alert("Usuário criado com sucesso!");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      });
      promisse.catch((element) => alert(element.response.data));
    } else {
      alert("Senhas não conferem");
      return;
    }
  }

  return (
    <MenuSignUpDiv>
      <h2>MyWallet</h2>
      <InputSignUp>
        <input
          type="text"
          placeholder="Nome"
          onChange={(element) => setNome(element.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(element) => setEmail(element.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(element) => setSenha(element.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a Senha"
          className={borderStyle}
          onChange={(element) => {
            setConfirmPassword(element.target.value);
            if (element.target.value === senha) {
              setBorderStyle("");
            } else {
              setBorderStyle("border-password");
            }
          }}
        />
      </InputSignUp>
      <button onClick={cadastrar}>Cadastrar</button>

      <Link to="/">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </MenuSignUpDiv>
  );
}
