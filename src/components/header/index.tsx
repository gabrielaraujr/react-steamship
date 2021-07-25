import React from "react";
import ShipLogo from "assets/images/ship-logo.png";
import * as S from "./styled";

const Header: React.FC = () => {
  const anchorTo = (name: string) => {
    window.location.href = name;
  };

  return (
    <S.HeaderContent>
      <S.Header>
        <div>
          <img src={ShipLogo} alt="Logo da empresa" />
          <h2>Steamship</h2>
        </div>

        <ul>
          <li onClick={() => anchorTo("#products")}>Produtos</li>
          <li onClick={() => anchorTo("#newsletter")}>Newsletter</li>
          <li onClick={() => anchorTo("#about")}>Sobre</li>
        </ul>
      </S.Header>
    </S.HeaderContent>
  );
};

export default Header;
