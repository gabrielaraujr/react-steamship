import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  padding: 2.5rem 0;
  background-color: RGB(23, 26, 33);

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

  ul {
    display: flex;
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
    }
  }

  @media (min-width: 700px) {
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

  @media (min-width: 900px) {
    ul {
      li {
        font-size: 1.6rem;
        margin-left: 2rem;
      }
    }
  } ;
`;
