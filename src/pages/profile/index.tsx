import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserImg from "assets/images/user.png";
import EditIcon from "assets/images/edit.svg";
import DeleteIcon from "assets/images/trash.svg";
import ArrowLeft from "assets/images/arrow-left.svg";

import Header from "components/header";
import Footer from "components/footer";

import { useAuth } from "contexts/auth";
import * as S from "./styled";

export default function Profile() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const isMobile = useMediaQuery({ maxWidth: 699 });

  // useEffect(() => localStorage.clear(), []);

  return (
    <React.Fragment>
      <ToastContainer />
      <S.CrudContent>
        <Header />

        <div className="backIcon">
          <img
            onClick={() => history.push("/home")}
            src={ArrowLeft}
            alt="Voltar para página anterior"
          />
          <h3>Voltar</h3>
        </div>
        <S.UserCrud>
          <div className="user-img">
            <img src={UserImg} alt="Imagem do usuário" />
          </div>

          <div className="user-info">
            <header className="user-title">
              <h3>{user.name}</h3>
              {!isMobile && <S.TypeInfo>Administrador</S.TypeInfo>}
            </header>

            <div className="card-body">
              <strong>Email:</strong>
              <p>{user.email}</p>
            </div>

            <div className="card-body">
              <strong>Senha:</strong>
              <p>{user.password}</p>
            </div>

            <div className="card-body">
              <strong>Rua:</strong>
              <p>{user.street}</p>
            </div>

            <div className="card-body">
              <strong>Número:</strong>
              <p>{user.number}</p>
            </div>

            <footer className="card-body">
              <div>
                <strong>CEP:</strong>
                <p>{user.zipCode}</p>
              </div>

              <div className="actions-buttons">
                <S.Button>
                  <img src={EditIcon} alt="Ícone de editar usuário" />
                </S.Button>

                <S.Button onClick={signOut}>
                  <img src={DeleteIcon} alt="Ícone de remover usuário" />
                </S.Button>
              </div>
            </footer>
          </div>
        </S.UserCrud>
        <Footer />
      </S.CrudContent>
    </React.Fragment>
  );
}
