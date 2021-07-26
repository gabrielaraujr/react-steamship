import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContent = styled.header`
  width: 100%;
  padding: 2.5rem 0;
  background-color: RGB(23, 26, 33);
  position: fixed;
  top: 0;
  transition: all 0.5s;
  z-index: 1001;

  @media (min-width: 700px) {
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

    img {
      width: 50px;
    }

    h2 {
      display: none;
      font-size: 2.3rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 1.3rem;
    }
  }

  @media (min-width: 750px) {
    div {
      img {
        width: 70px;
      }

      h2 {
        display: initial;
        font-size: 2.3rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-left: 1.3rem;
      }
    }
  }
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    font-family: Archivo, sans-serif;
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.25s;
    color: #b8b6b4;

    :hover {
      color: #fff;
    }

    button {
      width: 28px;
      height: 28px;
      padding: 0.1rem;
      margin-left: 1rem;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      border: none;
      box-shadow: 0 0 5px 3px rgba(69, 134, 188, 0.8);

      display: flex;
      align-items: center;

      img:first-child {
        width: 100%;
        height: auto;
        border-radius: 50%;
      }

      img:last-child {
        width: 12px;
        margin-left: 0.25rem;
      }

      :hover {
        opacity: 0.9;
      }
    }

    div[role="menu"] {
      visibility: hidden;
      position: absolute;
      right: 8%;
      background: #fff;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      border: 1px solid var(--text-list-prices-dark);
      border-radius: 5px;

      hr {
        width: 100%;
        border: 1px solid #e1e1e1;
        margin: 1rem 0;
      }

      a {
        width: 100%;
        color: #6d6d6d;
        padding: 1rem 2rem;
        text-transform: none;
        font-family: Archivo, sans-serif;
        letter-spacing: 0.5px;
        cursor: text;

        :not(:first-child):hover {
          color: #000;
          background: #e1e1e1;
          cursor: pointer;
        }
      }
    }

    div[role="menu"].visible {
      visibility: visible;
    }
  }

  @media (min-width: 700px) {
    li {
      font-size: 1.2rem;
      margin-left: 1rem;

      button {
        width: 35px;
        height: 35px;

        img:last-child {
          width: 14px;
          margin-left: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 900px) {
    li {
      font-size: 1.6rem;
      margin-left: 2rem;
    }
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  position: relative;

  img {
    width: 25px;
    :hover {
      filter: brightness(0.7);
    }
  }

  span {
    padding: 0.05rem 0.45rem;
    border-radius: 50%;
    background: var(--hiring-main);
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    position: absolute;
    right: -5px;
    bottom: 0;
  }

  @media (min-width: 700px) {
    img {
      width: 30px;
    }

    span {
      padding: 0.2rem 0.5rem;
      font-size: 1.4rem;
    }

    li {
      font-size: 1.6rem;
      margin-left: 2rem;
    }
  }
`;
