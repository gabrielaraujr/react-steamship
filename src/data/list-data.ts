import NewWorldImg from "assets/images/small/new-world-sm.jpg";
import GtaImg from "assets/images/small/gta-sm.jpg";
import DarkSoulsImg from "assets/images/small/dark-souls-sm.jpg";
import RedDeadImg from "assets/images/small/red-dead-sm.jpg";
import FFImg from "assets/images/small/ff-sm.jpg";
import HollowKnightImg from "assets/images/small/hollow-knight-sm.jpg";
import FallGuysImg from "assets/images/small/fall-guys-sm.jpg";
import BioshockImg from "assets/images/small/bioshock-sm.jpg";
import SkyrimImg from "assets/images/small/skyrim-sm.jpg";
import StarWarsImg from "assets/images/small/star-wars-sm.jpg";
import Windows from "assets/images/windows-icon.png";
import Mac from "assets/images/mac-icon.png";
import Linux from "assets/images/linux-icon.png";

export const listData = [
  {
    image: NewWorldImg,
    name: "New World",
    releaseDate: "31/ago/2021",
    discountPercentage: "",
    oldPrice: "",
    price: "R$ 75,49",
    soIcons: [Windows],
  },
  {
    image: GtaImg,
    name: "GTA V: Edição Premium",
    releaseDate: "29/dez/2020",
    discountPercentage: "",
    oldPrice: "",
    price: "R$ 32,89",
    soIcons: [Windows],
  },
  {
    image: DarkSoulsImg,
    name: "DARK SOULS™: REMASTERED",
    releaseDate: "23/mai/2018",
    discountPercentage: "-25%",
    oldPrice: "R$ 129,00",
    price: "R$ 96,75",
    soIcons: [Windows, Linux],
  },
  {
    image: RedDeadImg,
    name: "Red Dead Redemption 2",
    releaseDate: "5/dez/2019",
    discountPercentage: "-75%",
    oldPrice: "R$ 260,00",
    price: "R$ 104,00",
    soIcons: [Windows, Mac, Linux],
  },
  {
    image: FFImg,
    name: "FINAL FANTASY XIV Online",
    releaseDate: "18/fev/2014",
    discountPercentage: "",
    oldPrice: "",
    price: "R$ 52,99",
    soIcons: [Windows, Mac, Linux],
  },
  {
    image: BioshockImg,
    name: "Bioshock: The Collection",
    releaseDate: "16/set/2016",
    discountPercentage: "-80%",
    oldPrice: "R$ 119,00",
    price: "R$ 23,80",
    soIcons: [Windows, Linux],
  },
  {
    image: HollowKnightImg,
    name: "Hollow Knight",
    releaseDate: "24/fev/2017",
    discountPercentage: "-35%",
    oldPrice: "R$ 27,99",
    price: "R$ 18,19",
    soIcons: [Windows, Mac, Linux],
  },
  {
    image: FallGuysImg,
    name: "Fall Guys: Ultimate Knockout",
    releaseDate: "4/ago/2020",
    discountPercentage: "-30%",
    oldPrice: "R$ 37,99",
    price: "R$ 26,59",
    soIcons: [Windows, Linux],
  },

  {
    image: StarWarsImg,
    name: "STAR WARS™ Battlefront™ II",
    releaseDate: "11/jun/2020",
    discountPercentage: "-50%",
    oldPrice: "R$ 200,00",
    price: "R$ 100,00",
    soIcons: [Windows],
  },
  {
    image: SkyrimImg,
    name: "The Elder Scrolls V: Skyrim",
    releaseDate: "27/out/2016",
    discountPercentage: "-40%",
    oldPrice: "R$ 230,00",
    price: "R$ 138,00",
    soIcons: [Windows, Mac],
  },
];
