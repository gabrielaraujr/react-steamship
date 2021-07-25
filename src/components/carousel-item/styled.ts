import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContent = styled.header`
  width: 100%;
  padding: 2.5rem 0;
  background-color: RGB(23, 26, 33);

  @media(min-width: 700px) {
    padding: 3rem 0;
  }
`;

export const Header = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    img { width: 50px; };

    h2 {
      display: none;
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
      font-size: 1.4rem;
      text-transform: uppercase;
      margin-left: 1rem;
      transition: all 0.25s;
      color: #b8b6b4;
      :hover { color: #fff; };
    }
  };

  @media(min-width: 700px) {
    div {
      img { width: 70px; };

      h2 {
        display: initial;
        font-size: 2.3rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-left: 1.3rem;
      };
    };
  };

  @media(min-width: 900px) {
    ul {
      li {
        font-size: 1.6rem;
        margin-left: 2rem;
      };
    };
  };
`;

export const CarouselSection = styled.section`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto 1rem;

  h3 {
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    margin: 0 auto 1.5rem auto;
  };

  .alice-carousel {
    margin: 0 auto;
    .alice-carousel__wrapper {
      border-radius: 5px;
      box-shadow: 0 0 15px 3px rgba(0 0 0 / 20%);
      .alice-carousel__stage-item { height: 100%; };
    };
  };

  @media(min-width: 700px) {
    width: 100%;
    height: 750px;

    h3 {
      width: 80%;
      font-size: 2.5rem;
      text-align: center;
    };

    .alice-carousel { width: 80%; };
  };

  @media(min-width: 900px) { height: 500px; };
`;

export const Card = styled.a`
  line-height: 0;
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
  }

  @media(min-width: 900px) {
    display: flex;
    img { width: 55%; };
  }

  @media(min-width: 1400px) {
    img { width: 1000px; };
  };
`;

export const Info = styled.div`
  width: 100%;
  height: 230px;
  padding: 3rem;
  box-shadow: inset 0px 7px 14px -1px rgba(0 0 0 / 50%);
  color: #fff;
  background-color: var(--bg-info);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  gap: 1.5rem 0;

  h4 {
    font-size: 1.8rem;
    font-weight: 400;
  };

  p {
    font-size: 1.4rem;
    font-weight: 300;
  };

  @media(min-width: 700px) {
    gap: 0.75rem 0;
    padding: 1.6rem;
    height: 200px;
    box-shadow: inset 6px 0 12px -3px rgba(0 0 0 / 50%);

    h4 {
      font-size: 2rem;
      letter-spacing: 1px;
    };

    p {
      font-size: 1.4rem;
      letter-spacing: 0.5px;
    };
  };

  @media(min-width: 900px) {
    height: 250px;
  };

  @media(min-width: 1400px) {
    height: 280px;
    padding: 4.5rem;
  };
`;

export const Prices = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  b,
  span,
  strong,
  .so-icons { padding: 0.25rem };

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

export const NewsletterSection = styled.section`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: var(--ship-black);

  h2 {
    font-family: Archivo, sans-serif;
    font-size: 3.2rem;
    margin-bottom: 4rem;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  form {
    width: 60%;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 400;
      outline: none;
      padding: 1.5rem 1.5rem;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    };
  };

  @media(min-width: 700px) {
    h2 {
      font-size: 4rem;
      margin-bottom: 5rem;
    };

    p {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 1rem;
    };

    form { width: 500px; };
  };


  @media(min-width: 1200px) {
    h2 { font-size: 4.5rem; };
    p { font-size: 2.1rem; };
    form { width: 600px;  };
  }
`;

export const Button = styled.button`
  font-family: Archivo, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  color: #fff;
  background-color: #04d361;
  padding: 1.87rem 3rem;
  cursor: pointer;
  transition: all 0.5s;
  :hover { background-color: #029947; };

  @media(min-width: 700px) {
    padding: 1.89rem 3rem;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Footer = styled.footer`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 0;
  place-items: center;

  .footer-logo {
    display: flex;
    align-items: center;

    img {
      width: 70px;
      height: auto;
    };

    h2 {
      font-size: 2.3rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 1rem;
    };
  };

  .footer-logo-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
  };

  p {
    font-size: 1.6rem;
    font-weight: 300;
    color: #fff;
    margin: 2rem 0 3rem;
  };

  .social-media {
    img {
      width: 30px;
      height: 30px;
      margin-right: 2rem;
      transition: all 0.25s;
      :hover { filter: brightness(0.7) };
    };
  };

  .footer-form {
    p {
      font-size: 1.8rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
    };

    form {
      width: 100%;
      display: flex;
      align-items: center;

      input {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 400;
        outline: none;
        padding: 1.525rem 1.5rem;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      };
    };
  };

  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 5rem;
    place-items: initial;
  }
`;