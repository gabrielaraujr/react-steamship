import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Header from "components/header";
import NewsletterSection from "components/newsletter";
import Footer from "components/footer";

import BioshockImg from "assets/images/bioshock.jpg";
import RedDeadImg from "assets/images/red-dead.jpg";
import SkyrimImg from "assets/images/skyrim.jpg";
import StarWarsImg from "assets/images/star-wars.jpg";
import WindowsIcon from "assets/images/windows-icon.png";
import MacIcon from "assets/images/mac-icon.png";
import LinuxIcon from "assets/images/linux-icon.png";

import * as S from "./styled";

export default function Home() {
  // Responsive Design
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 899 });
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  // const isSmallThenTablet = useMediaQuery({ maxWidth: 699 });
  // const isTabletOrMore = useMediaQuery({ minWidth: 700 });

  useEffect(() => localStorage.clear(), []);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <S.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/sub/127633/"
    >
      <img src={BioshockImg} alt="Imagem do jogo bioshock" />
      <S.Info>
        <h4>Bioshock: The Collection</h4>
        {isTablet ? (
          <p>
            Volte para as cidades de Rapture e Columbia e experimente a premiada
            franquia BioShock como nunca antes, lindamente remasterizada em
            1080p. BioShock: The Collection contém todo o conteúdo single-player
            de BioShock, BioShock 2 e BioShock Infinite, todo o conteúdo add-on
            single-player.
          </p>
        ) : isDesktop ? (
          <p>
            Volte para as cidades de Rapture e Columbia e experimente a premiada
            franquia BioShock como nunca antes, lindamente remasterizada em
            1080p. BioShock: The Collection contém todo o conteúdo single-player
            de BioShock, BioShock 2 e BioShock Infinite, todo o conteúdo add-on
            single-player.
          </p>
        ) : (
          <p>
            Volte para as cidades de Rapture e Columbia e experimente a premiada
            franquia BioShock como nunca antes, lindamente remasterizada em
            1080p. BioShock: The Collection contém todo o conteúdo...
          </p>
        )}

        <S.Prices>
          <div>
            <span>-80%</span>
            <b>R$ 119,00</b>
            <strong>R$ 23,80</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
            <img src={LinuxIcon} alt="" />
          </div>
        </S.Prices>
      </S.Info>
    </S.Card>,
    <S.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/1237950/STAR_WARS_Battlefront_II/"
    >
      <img src={StarWarsImg} alt="Imagem do jogo star wars battlefront" />
      <S.Info>
        <h4>STAR WARS™ Battlefront™ II</h4>
        {isTablet ? (
          <p>
            Seja o herói na mais incrível experiência de batalha de Star Wars™
            com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha o Star
            Wars Battlefront II e a coleção completa de conteúdos de
            personalização que podem ser comprados no jogo desde o lançamento.
          </p>
        ) : isDesktop ? (
          <p>
            Seja o herói na mais incrível experiência de batalha de Star Wars™
            com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha o Star
            Wars Battlefront II e a coleção completa de conteúdos de
            personalização que podem ser comprados no jogo desde o lançamento.
          </p>
        ) : (
          <p>
            Seja o herói na mais incrível experiência de batalha de Star Wars™
            com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha o Star
            Wars Battlefront II e a coleção completa...
          </p>
        )}
        <S.Prices>
          <div>
            <span>-50%</span>
            <b>R$ 200,00</b>
            <strong>R$ 100,00</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
          </div>
        </S.Prices>
      </S.Info>
    </S.Card>,
    <S.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    >
      <img src={RedDeadImg} alt="Imagem do jogo red dead redemption 2" />
      <S.Info>
        <h4>Red Dead Redemption 2</h4>
        {isTablet ? (
          <p>
            Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar
            Games aclamada pela crítica e o jogo mais bem avaliado desta geração
            de consoles, agora chega aprimorado para PC com conteúdos inéditos
            no Modo História, melhorias visuais e muito mais.
          </p>
        ) : isDesktop ? (
          <p>
            Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar
            Games aclamada pela crítica e o jogo mais bem avaliado desta geração
            de consoles, agora chega aprimorado para PC com conteúdos inéditos
            no Modo História, melhorias visuais e muito mais.
          </p>
        ) : (
          <p>
            Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar
            Games aclamada pela crítica e o jogo mais bem avaliado desta geração
            de consoles, agora chega aprimorado...
          </p>
        )}
        <S.Prices>
          <div>
            <span>-75%</span>
            <b>R$ 260,00</b>
            <strong>R$ 104,00</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
            <img src={MacIcon} alt="" />
            <img src={LinuxIcon} alt="" />
          </div>
        </S.Prices>
      </S.Info>
    </S.Card>,
    <S.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/"
    >
      <img src={SkyrimImg} alt="Imagem do jogo skyrim special edition" />
      <S.Info>
        <h4>The Elder Scrolls V: Skyrim Special Edition</h4>
        {isTablet ? (
          <p>
            Vencedor de mais de 200 jogos do ano Awards, Skyrim Special Edition
            faz a fantasia épica ganhar vida com detalhes impressionantes. A
            edição especial inclui a crítica jogo aclamado e complementos com
            todos os novos recursos como arte remasterizada e efeitos, raios
            divinos volumétricos...
          </p>
        ) : isDesktop ? (
          <p>
            Vencedor de mais de 200 jogos do ano Awards, Skyrim Special Edition
            faz a fantasia épica ganhar vida com detalhes impressionantes. A
            edição especial inclui a crítica jogo aclamado e complementos com
            todos os novos recursos como arte remasterizada e efeitos, raios
            divinos volumétricos...
          </p>
        ) : (
          <p>
            Vencedor de mais de 200 jogos do ano Awards, Skyrim Special Edition
            faz a fantasia épica ganhar vida com detalhes impressionantes. A
            edição especial inclui a crítica jogo aclamado...
          </p>
        )}
        <S.Prices>
          <div>
            <span>-40%</span>
            <b>R$ 230,00</b>
            <strong>R$ 138,00</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
            <img src={MacIcon} alt="" />
          </div>
        </S.Prices>
      </S.Info>
    </S.Card>,
  ];

  return (
    <React.Fragment>
      <ToastContainer />
      <Header />

      <S.CarouselSection>
        <h3>Promoções Imperdíveis!</h3>

        <Carousel
          autoPlay
          infinite
          mouseTracking
          keyboardNavigation
          items={items}
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationType="fadeout"
          animationDuration={1000}
        />
      </S.CarouselSection>

      <NewsletterSection />
      <Footer />
    </React.Fragment>
  );
}
