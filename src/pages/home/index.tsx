import React, { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Header from "components/header";
import NewsletterSection from "components/newsletter";
import Footer from "components/footer";
import CarouselItem, { IGameItem } from "components/carousel-item";

import { data } from "data/data";
import * as S from "./styled";

export default function Home() {
  const games = data as IGameItem[];

  useEffect(() => localStorage.clear(), []);

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
      <Footer />
    </React.Fragment>
  );
}
