import React from "react";
import { useMediaQuery } from "react-responsive";

import * as S from "./styled";

export interface IGameItem {
  url: string;
  image: string;
  name: string;
  description: string;
  shortDescription: string;
  discountPercentage: string;
  oldPrice: string;
  price: string;
  soIcons: string[];
}

export interface IGameItemProps {
  game: IGameItem;
}

const CarouselItem: React.FC<IGameItemProps> = ({ game }) => {
  // Responsive Design
  const isMobile = useMediaQuery({ maxWidth: 699 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 999 });
  const isMoreThenTablet = useMediaQuery({ minWidth: 1000, maxWidth: 1399 });
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  // const isTabletOrMore = useMediaQuery({ minWidth: 700 });

  // const handleDragStart = (e) => e.preventDefault();

  return (
    <S.Card target="_blank" href={game.url}>
      <img src={game.image} alt={`Imagem ${game.name}`} />
      <S.Info>
        <h4>{game.name}</h4>

        {isDesktop || isTablet ? (
          <p>{game.description}</p>
        ) : isMobile || isMoreThenTablet ? (
          <p>{game.shortDescription}</p>
        ) : (
          ""
        )}

        <S.Prices>
          <div>
            <span>{game.discountPercentage}</span>
            <b>{game.oldPrice}</b>
            <strong>{game.price}</strong>
          </div>
          <div className="so-icons">
            {game.soIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Ícone do sistema operacional ${icon}`}
              />
            ))}
          </div>
        </S.Prices>
      </S.Info>
    </S.Card>
  );
};

export default CarouselItem;
