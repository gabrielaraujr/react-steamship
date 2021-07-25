import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Header from "components/header";
import NewsletterSection from "components/newsletter";
import ListItem, { IGameListItem } from "components/product-item";
import Footer from "components/footer";
import CarouselItem, { IGameItem } from "components/carousel-item";

import { data } from "data/data";
import { smallData } from "data/data-sm";
import * as S from "./styled";

export default function Home() {
  const games = data as IGameItem[];
  const gameList = smallData as IGameListItem[];

  // useEffect(() => localStorage.clear(), []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Header />

      <S.CarouselSection>
        <h3>Promoções em destaque</h3>

        <Carousel
          autoPlay
          infinite
          mouseTracking
          keyboardNavigation
          items={games.map((game, index) => (
            <CarouselItem key={index} game={game} />
          ))}
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationType="fadeout"
          animationDuration={1000}
        />
      </S.CarouselSection>

      <NewsletterSection />

      <S.GameListSection id="products">
        <h3>Produtos mais vendidos</h3>

        {gameList.map((game, index) => (
          <ListItem key={index} game={game} />
        ))}
      </S.GameListSection>

      <Footer />
    </React.Fragment>
  );
}
