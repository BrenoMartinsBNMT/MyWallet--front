import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBalance from "./view/AddBalance";

import { BackGround } from "./view/componets/BackGround";
import UserContext from "./view/componets/ContextApi";
import SignIn from "./view/Sign-in";
import SingUp from "./view/Sign-up";
import SubBalance from "./view/SubBalance";
import WalletRegister from "./view/WalletRegister";
export default function App() {
  return (
    <UserContext.Provider>
      <BackGround>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/cadastro" element={<SingUp />} />
            <Route path="/carteira" element={<WalletRegister />} />
            <Route path="/adicionar-saldo" element={<AddBalance />} />
            <Route path="/retirar-saldo" element={<SubBalance />} />
          </Routes>
        </BrowserRouter>
      </BackGround>
    </UserContext.Provider>
  );
}
