import React from 'react';
import { useMediaQuery } from 'react-responsive';

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
import InstagramIcon from '../../assets/images/instagram.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';
import GithubIcon from '../../assets/images/github.svg';

import * as Style from './styled';

export default function Home() {
  const [email, setEmail] = React.useState({main: '', footer: ''});
  const isSmallThenTablet = useMediaQuery({ maxWidth: 699 });
  const isTabletOrMore = useMediaQuery({ minWidth: 700 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 899 });
  const isDesktop = useMediaQuery({ minWidth: 1400 });

  React.useEffect(() => { localStorage.clear(); }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Style.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/sub/127633/"
    >
      <img src={BioshockImg} alt="Imagem do jogo bioshock" />
      <Style.Info>
        <h4>Bioshock: The Collection</h4>
        {isTablet ?
          <p>Volte para as cidades de Rapture e Columbia e
          experimente a premiada franquia BioShock como
          nunca antes, lindamente remasterizada em 1080p.
          BioShock: The Collection contém todo o conteúdo
          single-player de BioShock, BioShock 2 e BioShock
          Infinite, todo o conteúdo add-on single-player.</p>
        :
          isDesktop ?
            <p>Volte para as cidades de Rapture e Columbia e
            experimente a premiada franquia BioShock como
            nunca antes, lindamente remasterizada em 1080p.
            BioShock: The Collection contém todo o conteúdo
            single-player de BioShock, BioShock 2 e BioShock
            Infinite, todo o conteúdo add-on single-player.</p>
          :
            <p>Volte para as cidades de Rapture e Columbia e
            experimente a premiada franquia BioShock como
            nunca antes, lindamente remasterizada em 1080p.
            BioShock: The Collection contém todo o conteúdo...</p>
        }

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
    <Style.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/1237950/STAR_WARS_Battlefront_II/"
    >
      <img src={StarWarsImg} alt="Imagem do jogo star wars battlefront" />
      <Style.Info>
        <h4>STAR WARS™ Battlefront™ II</h4>
        {isTablet ?
          <p>Seja o herói na mais incrível experiência de
          batalha de Star Wars™ com Star Wars™ Battlefront™ II:
          Celebration Edition! Obtenha o Star Wars Battlefront
          II e a coleção completa de conteúdos de personalização
          que podem ser comprados no jogo desde o lançamento.</p>
        :
          isDesktop ?
            <p>Seja o herói na mais incrível experiência de
            batalha de Star Wars™ com Star Wars™ Battlefront™ II:
            Celebration Edition! Obtenha o Star Wars Battlefront
            II e a coleção completa de conteúdos de personalização
            que podem ser comprados no jogo desde o lançamento.</p>
          :
            <p>Seja o herói na mais incrível experiência de
            batalha de Star Wars™ com Star Wars™ Battlefront™ II:
            Celebration Edition! Obtenha o Star Wars Battlefront
            II e a coleção completa...</p>
        }
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
    <Style.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    >
      <img src={RedDeadImg} alt="Imagem do jogo red dead redemption 2" />
      <Style.Info>
        <h4>Red Dead Redemption 2</h4>
        {isTablet ?
          <p>Red Dead Redemption 2, a épica aventura de
          mundo aberto da Rockstar Games aclamada pela
          crítica e o jogo mais bem avaliado desta geração
          de consoles, agora chega aprimorado para PC
          com conteúdos inéditos no Modo História,
          melhorias visuais e muito mais.</p>
        :
          isDesktop ?
            <p>Red Dead Redemption 2, a épica aventura de
            mundo aberto da Rockstar Games aclamada pela
            crítica e o jogo mais bem avaliado desta geração
            de consoles, agora chega aprimorado para PC
            com conteúdos inéditos no Modo História,
            melhorias visuais e muito mais.</p>
          :
            <p>Red Dead Redemption 2, a épica aventura de
            mundo aberto da Rockstar Games aclamada pela
            crítica e o jogo mais bem avaliado desta geração
            de consoles, agora chega aprimorado...</p>
        }
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
    <Style.Card
      onDragStart={handleDragStart}
      target="_blank"
      href="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/"
    >
      <img src={SkyrimImg} alt="Imagem do jogo skyrim special edition" />
      <Style.Info>
        <h4>The Elder Scrolls V: Skyrim Special Edition</h4>
        {isTablet ?
          <p>Vencedor de mais de 200 jogos do ano Awards,
          Skyrim Special Edition faz a fantasia épica
          ganhar vida com detalhes impressionantes. A edição
          especial inclui a crítica jogo aclamado e
          complementos com todos os novos recursos como
          arte remasterizada e efeitos, raios divinos
          volumétricos...</p>
        :
          isDesktop ?
            <p>Vencedor de mais de 200 jogos do ano Awards,
            Skyrim Special Edition faz a fantasia épica
            ganhar vida com detalhes impressionantes. A edição
            especial inclui a crítica jogo aclamado e
            complementos com todos os novos recursos como
            arte remasterizada e efeitos, raios divinos
            volumétricos...</p>
          :
            <p>Vencedor de mais de 200 jogos do ano Awards,
            Skyrim Special Edition faz a fantasia épica
            ganhar vida com detalhes impressionantes. A edição
            especial inclui a crítica jogo aclamado...</p>
        }
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email.main) {
      localStorage.setItem('email', email.main);
      setEmail({ main: ''});
    } else {
      localStorage.setItem('email', email.footer);
      setEmail({ footer: ''});
    }

    alert('Email cadastrado com sucesso!')
  };

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
        <h3>Promoções Imperdíveis!</h3>

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

      <Style.NewsletterSection>
        <h2>Aproveite, vai ser por tempo limitado!</h2>
        <p>Preencha o campo abaixo com seu email e fique por dentro das promoções!</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input type="text" value={email.main} placeholder="email@exemplo.com" onChange={e => setEmail({ main: e.target.value })} />
          <Style.Button type="submit">Enviar</Style.Button>
        </form>
      </Style.NewsletterSection>

      <Style.Footer>
        <div>
          <div className="footer-logo-social">
            <div className="footer-logo">
              <img src={ShipLogo} alt="Logo da página" />
              <h2>Steamship</h2>
            </div>

            {isSmallThenTablet &&
              <div className="social-media">
                <a href="https://www.instagram.com/gabrielaraujr">
                  <img src={InstagramIcon} alt="Ícone do instagram" />
                </a>
                <a href="https://www.linkedin.com/in/gabrielaraujr">
                  <img src={LinkedinIcon} alt="Ícone do linkedin" />
                </a>
                <a href="https://github.com/gabrielaraujr">
                  <img src={GithubIcon} alt="Ícone do github" />
                </a>
              </div>
            }
          </div>

          <p>Steamship é um e-commerce criado por Gabriel Araujo,
          para venda de plataformas digitais como jogos e aplicativos de
          programação e fornece serviços facilitados como
          atualização automática de jogos, e preços acessíveis
          aos usuários.</p>

          {isTabletOrMore &&
            <div className="social-media">
              <a href="https://www.instagram.com/gabrielaraujr">
                <img src={InstagramIcon} alt="Ícone do instagram" />
              </a>
              <a href="https://www.linkedin.com/in/gabrielaraujr">
                <img src={LinkedinIcon} alt="Ícone do linkedin" />
              </a>
              <a href="https://github.com/gabrielaraujr">
                <img src={GithubIcon} alt="Ícone do github" />
              </a>
            </div>
          }
        </div>

        <div className="footer-form">
          <p>Não perca tempo, preencha e fique por dentro!</p>

          <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" value={email.footer} placeholder="email@exemplo.com" onChange={e => setEmail({ footer: e.target.value })} />
            <Style.Button type="submit">Enviar</Style.Button>
          </form>
        </div>
      </Style.Footer>
    </>
  );
};