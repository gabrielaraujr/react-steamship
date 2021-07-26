import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import ShipLogo from "assets/images/ship-logo.png";
import UserImg from "assets/images/user.png";
import ArrowDown from "assets/images/chevron-down.svg";
import CartIcon from "assets/images/cart.svg";

import { useAuth } from "contexts/auth";
import * as S from "./styled";

const Header: React.FC = () => {
  const [small, setSmall] = useState(false);
  const history = useHistory();
  const { user, signOut } = useAuth();

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const anchorTo = (name: string) => {
    window.location.href = name;
  };

  const toProfile = () => history.push("/profile");

  const menuList = (
    <div className={isOpen ? "visible" : ""} role="menu">
      <a {...itemProps[0]}>
        Conectado como <b>{user?.name}</b>
      </a>
      <hr />
      <a {...itemProps[1]} onClick={toProfile}>
        Gerenciar Perfil
      </a>
      <a {...itemProps[2]} onClick={signOut}>
        Sair
      </a>
    </div>
  );

  return (
    <S.HeaderContent
      style={small ? { padding: "1rem 0", opacity: "0.95" } : null}
    >
      <S.Header>
        <div>
          <img src={ShipLogo} alt="Logo da empresa" />
          <h2>Steamship</h2>
        </div>

        <S.Navbar>
          <li onClick={() => anchorTo("#products")}>Produtos</li>
          <li onClick={() => anchorTo("#newsletter")}>Newsletter</li>
          <li onClick={() => anchorTo("#about")}>Sobre</li>
          <li>
            <S.LinkTo to="/cart">
              <img src={CartIcon} alt="Ícone do carrinho de compras" />
            </S.LinkTo>
          </li>
          <li>
            <button {...buttonProps}>
              <img src={UserImg} alt="Imagem de um usuário" />
              <img src={ArrowDown} alt="Seta para baixo" />
            </button>

            {isOpen && menuList}
          </li>
        </S.Navbar>
      </S.Header>
    </S.HeaderContent>
  );
};

export default Header;
