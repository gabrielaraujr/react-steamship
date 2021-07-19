import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContent = styled.header`
  width: 100%;
  padding: 3rem 3rem;
  background-color: RGB(23, 26, 33);
`;

export const Header = styled.header`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    img { width: 10%; };

    h2 {
      font-size: 2.3rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 1.3rem;
    };
  };

  ul {
    display: flex;
    list-style-type: none;

    li {
      font-family: Archivo, sans-serif;
      text-transform: uppercase;
      margin-left: 2rem;
      transition: all 0.25s;
      color: #b8b6b4;
      :hover { color: #fff; };
    }
  };
`;

export const CarouselSection = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem auto;

  h3 {
    width: 60%;
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    margin: 0 auto 1.2rem auto;
  }

  .alice-carousel {
    width: 60%;
    margin: 0 auto;
    .alice-carousel__wrapper {
      border-radius: 5px;
      box-shadow: 0 0 15px 3px rgba(0 0 0 / 20%);
      .alice-carousel__stage-item {
        width: 100% !important;
      }
    }
  }
`;

export const Card = styled.a`
  display: flex;
  background-color: RGB(23, 26, 33);

  img {
    width: 100%;
    height: auto;
  }

`;

export const Info = styled.div`
  width: 100%;
  padding: 2rem;
  box-shadow: inset 6px 0 12px -3px rgba(0 0 0 / 50%);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  gap: 1rem 0;

  h4 {
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
`;

export const Prices = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  b,
  span,
  strong,
  .so-icons { padding: 0.25rem 0.75rem; };

  span {
    color: var(--text-percentage);
    background-color: var(--bg-percentage);
  };

  b {
    color: var(--text-prices-dark);
    background-color: var(--bg-prices);
    text-decoration: line-through;
  };

  strong {
    color: var(--text-prices-light);
    background-color: var(--bg-prices);
  };

  .so-icons {
    display: flex;
    img {
      width: 22px;
      margin-left: 0.50rem
    };
  }
`;






export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;