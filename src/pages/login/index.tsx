import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import ShipLogo from "assets/images/ship-logo.png";

import { useAuth, IUserData } from "contexts/auth";
import { ToastContainer, toast } from "react-toastify";
import * as S from "./styled";

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

export default function Login() {
  const [createUser, setCreateUser] = useState<IUserData>({
    name: "",
    email: "",
    password: "",
    zipCode: "",
    street: "",
    number: 0,
  });

  const history = useHistory();
  const { signIn, signed, user } = useAuth();

  useEffect(() => {
    if (signed && user) {
      history.push("/home");
    }
  }, [signed, user, history]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateUser({ ...createUser, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const values = Object.values(createUser);

    for (let i = 0; i < values.length; i++) {
      const element = values[i];
      if (element === "") {
        return toast.warning("Preencha todos os campos!");
      }
    }

    if (createUser.email.length < 6 || !createUser.email.includes("@")) {
      return toast.warning("Digite um e-mail válido!");
    }

    await signIn(createUser);
    toast.success("Autenticado com sucesso!");
  };

  return (
    <S.LoginPage>
      <ToastContainer />
      <S.LoginCard>
        <S.SideImage />

        <S.LogoContainer>
          <img src={ShipLogo} alt="Logo da empresa" />
          <h3>Seja bem vindo!</h3>
          <p>
            Para ter acesso é necessário <br />
            preencher o formulário abaixo!
          </p>
        </S.LogoContainer>

        <S.LoginForm onSubmit={handleLogin}>
          <S.Input
            name="name"
            placeholder="Nome"
            value={createUser.name}
            onChange={onInputChange}
          />
          <S.Input
            name="email"
            placeholder="E-mail"
            value={createUser.email}
            onChange={onInputChange}
          />

          <S.Input
            name="password"
            type="password"
            placeholder="Senha"
            value={createUser.password}
            onChange={onInputChange}
          />

          <S.Input
            name="zipCode"
            placeholder="CEP"
            value={createUser.zipCode}
            onChange={onInputChange}
          />

          <S.Input
            name="street"
            placeholder="Rua/Logradouro"
            value={createUser.street}
            onChange={onInputChange}
          />

          <S.Input
            name="number"
            type="number"
            placeholder="Número"
            value={createUser.number}
            onChange={onInputChange}
          />

          <S.Button type="submit">Entrar</S.Button>
        </S.LoginForm>
      </S.LoginCard>
    </S.LoginPage>
  );
}
