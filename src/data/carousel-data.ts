import BioshockImg from "assets/images/bioshock.jpg";
import RedDeadImg from "assets/images/red-dead.jpg";
import SkyrimImg from "assets/images/skyrim.jpg";
import StarWarsImg from "assets/images/star-wars.jpg";
import Windows from "assets/images/windows-icon.png";
import Mac from "assets/images/mac-icon.png";
import Linux from "assets/images/linux-icon.png";

export const carouselData = [
  {
    image: BioshockImg,
    name: "Bioshock: The Collection",
    description: `Volte para as cidades de Rapture e Columbia e
    experimente a premiada franquia BioShock como nunca antes,
    lindamente remasterizada em 1080p. BioShock: The Collection
    contém todo o conteúdo single-player de BioShock, BioShock
    2 e BioShock Infinite.`,
    shortDescription: `Volte para as cidades de Rapture e Columbia e
    experimente a premiada franquia BioShock como nunca antes, lindamente
    remasterizada em 1080p. BioShock: The Collection contém...`,
    discountPercentage: "-80%",
    oldPrice: "R$ 119,00",
    price: "R$ 23,80",
    soIcons: [Windows, Linux],
  },
  {
    image: StarWarsImg,
    name: "STAR WARS™ Battlefront™ II",
    description: `Seja o herói na mais incrível experiência de batalha de
    Star Wars™ com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha
    o Star Wars Battlefront II e a coleção completa de conteúdos de
    personalização que podem ser comprados no jogo desde o lançamento.`,
    shortDescription: `Seja o herói na mais incrível experiência de batalha de Star Wars™
      com Star Wars™ Battlefront™ II: Celebration Edition! Obtenha o
      Star Wars Battlefront II e a coleção completa...`,
    discountPercentage: "-50%",
    oldPrice: "R$ 200,00",
    price: "R$ 100,00",
    soIcons: [Windows],
  },
  {
    image: RedDeadImg,
    name: "Red Dead Redemption 2",
    description: `Red Dead Redemption 2, a épica aventura de mundo
    aberto da Rockstar Games aclamada pela crítica e o jogo mais
    bem avaliado desta geração de consoles, agora chega aprimorado
    para PC com conteúdos inéditos no Modo História, melhorias visuais
    e muito mais.`,
    shortDescription: `Red Dead Redemption 2, a épica aventura de mundo
    aberto da Rockstar Games aclamada pela crítica e o jogo mais bem
    avaliado desta geração de consoles, agora chega aprimorado...`,
    discountPercentage: "-75%",
    oldPrice: "R$ 260,00",
    price: "R$ 104,00",
    soIcons: [Windows, Mac, Linux],
  },
  {
    image: SkyrimImg,
    name: "The Elder Scrolls V: Special Edition",
    description: `Vencedor de mais de 200 jogos do ano Awards, Skyrim
    Special Edition faz a fantasia épica ganhar vida com detalhes
    impressionantes. A edição especial inclui a crítica jogo aclamado
    e complementos com todos os novos recursos como arte remasterizada
    e efeitos e raios divinos.`,
    shortDescription: `Vencedor de mais de 200 jogos do ano Awards,
    Skyrim Special Edition faz a fantasia épica ganhar vida com detalhes
    impressionantes. A edição especial inclui a crítica jogo...`,
    discountPercentage: "-40%",
    oldPrice: "R$ 230,00",
    price: "R$ 138,00",
    soIcons: [Windows, Mac],
  },
];
