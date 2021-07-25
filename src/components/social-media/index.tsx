import React from "react";

import InstagramIcon from "assets/images/instagram.svg";
import LinkedinIcon from "assets/images/linkedin.svg";
import GithubIcon from "assets/images/github.svg";

import * as S from "./styled";

const SocialMedia: React.FC = () => (
  <S.SocialMediaContent>
    <a href="https://www.instagram.com/gabrielaraujr">
      <img src={InstagramIcon} alt="Ícone do instagram" />
    </a>
    <a href="https://www.linkedin.com/in/gabrielaraujr">
      <img src={LinkedinIcon} alt="Ícone do linkedin" />
    </a>
    <a href="https://github.com/gabrielaraujr">
      <img src={GithubIcon} alt="Ícone do github" />
    </a>
  </S.SocialMediaContent>
);

export default SocialMedia;
