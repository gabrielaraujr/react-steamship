import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Header from "components/header";
import NewsletterSection from "components/newsletter";
import GameList, { IGameListItem } from "components/product-item";
import Footer from "components/footer";
import CarouselItem, { IGameItem } from "components/carousel-item";

import { carouselData } from "data/carousel-data";
import { listData } from "data/list-data";
import * as S from "./styled";

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

export default function Home() {
  const dataGames = carouselData as IGameItem[];
  const dataGameList = listData as IGameListItem[];

  const [games, setGames] = useState<IGameListItem[]>(() => {
    const storagedCart = localStorage.getItem("@Cart:games");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const updateAmount = () => {
      let amountSum = 0;
      for (let item in games) amountSum += games[item].amount;
      setAmount(amountSum);
      localStorage.setItem("@Cart:amount", JSON.stringify(amountSum));
    };

    updateAmount();
  }, [games]);

  const addProductToCart = (name: string) => {
    const productAlreadyInCart = games.find((game) => game.name === name);

    if (!productAlreadyInCart) {
      const product = dataGameList.find((game) => game.name === name);
      setGames([...games, { ...product, amount: 1 }]);
      localStorage.setItem(
        "@Cart:games",
        JSON.stringify([...games, { ...product, amount: 1 }])
      );
      toast.success("Adicionado ao carrinho!");
      return;
    }

    if (productAlreadyInCart) {
      const updateCart = games.map((game) =>
        game.name === name
          ? {
              ...game,
              amount: Number(game.amount) + 1,
            }
          : game
      );

      setGames(updateCart);
      localStorage.setItem("@Cart:games", JSON.stringify(updateCart));
      return;
    } else {
      toast.error("Erro ao adicionar no carrinho!");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Header amount={amount} />

      <S.CarouselSection>
        <h3>Promoções em destaque</h3>

        <Carousel
          autoPlay
          infinite
          mouseTracking
          keyboardNavigation
          items={dataGames.map((game, index) => (
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

        {dataGameList.map((game) => (
          <GameList
            key={game.name}
            game={game}
            addProductToCart={addProductToCart}
          />
        ))}
      </S.GameListSection>

      <Footer />
    </React.Fragment>
  );
}
