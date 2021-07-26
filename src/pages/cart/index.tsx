import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "components/header";
import GameList, { IGameListItem } from "components/product-item";
import Footer from "components/footer";

import ArrowLeft from "assets/images/arrow-left.svg";

import * as S from "./styled";

export default function Cart() {
  const history = useHistory();
  const [games, setGames] = useState<IGameListItem[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  useEffect(() => {
    async function loadGames() {
      const localGame = localStorage.getItem("@Cart:games");
      const parseLocalGame = JSON.parse(localGame) as [];
      const gamesFormatted = parseLocalGame?.map(function (
        game: IGameListItem
      ) {
        return { ...game };
      });

      setGames(gamesFormatted);
    }

    loadGames();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <Header />

      <S.CartItems>
        <S.BackNavigation>
          <img
            onClick={() => history.push("/home")}
            src={ArrowLeft}
            alt="Voltar para página anterior"
          />
          <h3>Voltar</h3>
        </S.BackNavigation>

        <h2>Carrinho de compras</h2>

        {games?.length > 0 ? (
          games?.map((game) => <GameList key={game.name} game={game} />)
        ) : (
          <p>Não há produtos no carrinho.</p>
        )}
      </S.CartItems>

      <Footer />
    </React.Fragment>
  );
}
