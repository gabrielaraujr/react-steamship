import React from "react";
import NewsletterForm from "components/newsletter-form";
import * as S from "./styled";

const Newsletter: React.FC = () => {
  return (
    <S.NewsletterSection id="newsletter">
      <div>
        <h2>Aproveite, vai ser por tempo limitado!</h2>
        <p>
          Preencha o campo abaixo com seu email e fique por dentro das
          promoções!
        </p>

        <NewsletterForm />
      </div>
    </S.NewsletterSection>
  );
};

export default Newsletter;
