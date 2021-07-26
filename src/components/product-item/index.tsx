import React from "react";
// import { useMediaQuery } from "react-responsive";

import * as S from "./styled";

export interface IGameListItem {
  image: string;
  name: string;
  releaseDate: string;
  discountPercentage: string;
  oldPrice: string;
  price: string;
  amount: number;
  soIcons: string[];
}

interface IGameListItemProps {
  game: IGameListItem;
  addProductToCart?: (name: string) => void;
}

const ListItem: React.FC<IGameListItemProps> = ({ game, ...rest }) => {
  return (
    <S.Card>
      <div className="card-image">
        <img src={game.image} alt={`Imagem do jogo ${game.name}`} />
      </div>

      <S.Info>
        <S.TopOfCard>
          <div>
            <h4>{game.name}</h4>

            <div className="so-icons">
              {game.soIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`Ícone do sistema operacional suportado`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => rest.addProductToCart(game.name)}
          >
            <b>+</b> Carrinho
          </button>
        </S.TopOfCard>
        <S.BottomOfCard>
          <p>{game.releaseDate}</p>

          <div>
            <span>{game.discountPercentage}</span>
            <b>{game.oldPrice}</b>
            <strong>{game.price}</strong>
          </div>
        </S.BottomOfCard>
      </S.Info>
    </S.Card>
  );
};

export default ListItem;
