import React from 'react';

import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ShipLogo from '../../assets/images/ship-logo.png';
import BioshockImg from '../../assets/images/bioshock.jpg';
import RedDeadImg from '../../assets/images/red-dead.jpg';
import SkyrimImg from '../../assets/images/skyrim.jpg';
import StarWarsImg from '../../assets/images/star-wars.jpg';
import WindowsIcon from '../../assets/images/windows-icon.png';
import MacIcon from '../../assets/images/mac-icon.png';
import LinuxIcon from '../../assets/images/linux-icon.png';
import * as Style from './styled';

export default function Home() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Style.Card onDragStart={handleDragStart}>
      <img src={BioshockImg} alt="" />
      <Style.Info>
        <h4>Bioshock: The Collection</h4>
        <p>Volte para as cidades de Rapture e Columbia e
          experimente a premiada franquia BioShock como
          nunca antes, lindamente remasterizada em 1080p.
          BioShock: The Collection contém todo o conteúdo
          single-player de BioShock, BioShock 2 e BioShock
          Infinite, todo o conteúdo add-on single-player.</p>
        <Style.Prices>
          <div>
            <span>-80%</span>
            <b>R$ 119,00</b>
            <strong>R$ 23,80</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
            <img src={LinuxIcon} alt="" />
          </div>
        </Style.Prices>
      </Style.Info>
    </Style.Card>,
    <Style.Card onDragStart={handleDragStart}>
      <img src={StarWarsImg} alt="" />
      <Style.Info>
        <h4>STAR WARS™ Battlefront™ II</h4>
        <p>Seja o herói na mais incrível experiência de
          batalha de Star Wars™ com Star Wars™ Battlefront™ II:
          Celebration Edition! Obtenha o Star Wars Battlefront
          II e a coleção completa de conteúdos de personalização
          que podem ser comprados no jogo desde o lançamento.</p>
        <Style.Prices>
          <div>
            <span>-50%</span>
            <b>R$ 200,00</b>
            <strong>R$ 100,00</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
          </div>
        </Style.Prices>
      </Style.Info>
    </Style.Card>,
    <Style.Card onDragStart={handleDragStart}>
      <img src={RedDeadImg} alt="" />
      <Style.Info>
        <h4>Red Dead Redemption 2</h4>
        <p>Red Dead Redemption 2, a épica aventura de
          mundo aberto da Rockstar Games aclamada pela
          crítica e o jogo mais bem avaliado desta geração
          de consoles, agora chega aprimorado para PC
          com conteúdos inéditos no Modo História,
          melhorias visuais e muito mais.</p>
        <Style.Prices>
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
        </Style.Prices>
      </Style.Info>
    </Style.Card>,
    <Style.Card onDragStart={handleDragStart}>
      <img src={SkyrimImg} alt="" />
      <Style.Info>
        <h4>The Elder Scrolls V: Skyrim Special Edition</h4>
        <p>Vencedor de mais de 200 jogos do ano Awards,
          Skyrim Special Edition faz a fantasia épica
          ganhar vida com detalhes impressionantes. A edição
          especial inclui a crítica jogo aclamado e
          complementos com todos os novos recursos como
          arte remasterizada e efeitos, raios divinos
          volumétricos...</p>
        <Style.Prices>
          <div>
            <span>-40%</span>
            <b>R$ 230,00</b>
            <strong>R$ 138,00</strong>
          </div>
          <div className="so-icons">
            <img src={WindowsIcon} alt="" />
            <img src={MacIcon} alt="" />
          </div>
        </Style.Prices>
      </Style.Info>
    </Style.Card>
  ];

  return (
    <>
      <Style.HeaderContent>
        <Style.Header>
          <div>
            <img src={ShipLogo} alt="Logo da página" />
            <h2>Steamship</h2>
          </div>

          <ul>
            <Style.LinkTo to=""><li>Loja</li></Style.LinkTo>
            <Style.LinkTo to=""><li>Comunidade</li></Style.LinkTo>
            <Style.LinkTo to=""><li>Contato</li></Style.LinkTo>
            <Style.LinkTo to=""><li>Suporte</li></Style.LinkTo>
          </ul>
        </Style.Header>
      </Style.HeaderContent>

      <Style.CarouselSection>
        <h3>Promoções em destaque</h3>

        <Carousel
          items={items}
          autoPlay={true}
          autoPlayInterval={2000}
          autoPlayStrategy="default"
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          keyboardNavigation={true}
        />
      </Style.CarouselSection>

      {/* <Style.Button>Hello Steamship!</Style.Button> */}
    </>
  );
};