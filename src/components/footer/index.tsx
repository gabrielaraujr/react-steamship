import React from "react";
import { useMediaQuery } from "react-responsive";

import NewsletterForm from "components/newsletter-form";
import SocialMediaContent from "components/social-media";

import ShipLogo from "assets/images/ship-logo.png";

import * as S from "./styled";

const Footer: React.FC = () => {
  // Responsive Design
  const isSmallThenTablet = useMediaQuery({ maxWidth: 699 });
  const isTabletOrMore = useMediaQuery({ minWidth: 700 });

  return (
    <S.Footer id="about">
      <div className="title">
        <div className="logo-social">
          <div className="logo">
            <img src={ShipLogo} alt="Logo da página" />
            <h2>Steamship</h2>
          </div>

          {isSmallThenTablet && <SocialMediaContent />}
        </div>

        <S.FooterText>
          Steamship é um e-commerce criado por Gabriel Araujo, para venda de
          plataformas digitais como jogos e aplicativos de programação e fornece
          serviços facilitados como atualização automática de jogos, e preços
          acessíveis aos usuários.
        </S.FooterText>

        {isTabletOrMore && <SocialMediaContent />}
      </div>

      <div className="form-content">
        <p>Não perca tempo, preencha e fique por dentro!</p>

        <NewsletterForm />
      </div>
    </S.Footer>
  );
};

export default Footer;
