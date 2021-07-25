import styled from "styled-components";

export const Card = styled.div`
  width: calc(100% - 20px);
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin: 0 auto 1rem;
  border: 1px solid rgba(139, 185, 224, 0);
  box-shadow: 0px 5px 8px -1px rgba(0 0 0 / 50%);
  transition: all 0.25s;

  :hover {
    border: 1px solid rgba(139, 185, 224, 0.2);
    background: rgba(0, 0, 0, 0.5);
  }

  .card-image {
    float: left;
    display: block;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 700px) {
    width: 80%;
    padding: 0.75rem;
    margin: 0 auto 0.5rem;
    box-shadow: 0px 3px 6px -1px rgba(0 0 0 / 50%);
  }

  @media (min-width: 1000px) {
    width: 60%;
  }

  /* @media (min-width: 1400px) {
    img {
      width: 1000px;
    }
  } */
`;

export const Info = styled.div`
  overflow: hidden;
  display: block;
  color: #fff;
  padding-left: 1.25rem;
  /* width: 100%; */
  /* height: 230px; */
  /* height: auto; */
  /* box-shadow: inset 0px 7px 14px -1px rgba(0 0 0 / 50%); */

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 20px;

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.5px;
  }

  /* @media (min-width: 700px) {
    gap: 0.75rem 0;
    padding: 1.6rem;
    height: 200px;
    box-shadow: inset 6px 0 12px -3px rgba(0 0 0 / 50%);

    h4 {
      font-size: 2rem;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.4rem;
      letter-spacing: 0.5px;
    }
  }

  @media (min-width: 900px) and (max-width: 999) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 1000px) {
    height: 250px;
    padding: 3rem;
  }

  @media (min-width: 1400px) {
    height: 280px;
    padding: 4.5rem;
  } */
`;

export const TopOfCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .so-icons {
    height: 20px;
    margin: 0.5rem 0 0;

    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
      filter: brightness(0.5);
    }
  }

  button {
    position: relative;
    font-family: Archivo, sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    border-radius: 3px;
    border: none;
    outline: none;

    color: var(--item-text);
    background: var(--item-button);
    background: -webkit-linear-gradient(top, #6fa720 5%, #588a1b 95%);
    background: linear-gradient(to bottom, #6fa720 5%, #588a1b 95%);
    background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
    text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);

    padding: 0.75rem 1rem 0.75rem 2rem;
    cursor: pointer;
    transition: all 0.25s;

    :hover {
      color: #fff;
      background: var(--item-button-dark);
      background: -webkit-linear-gradient(top, #8ed629 5%, #6aa621 95%);
      background: linear-gradient(to bottom, #8ed629 5%, #6aa621 95%);
      background: linear-gradient(to right, #8ed629 5%, #6aa621 95%);
    }

    b {
      height: 20px;
      position: absolute;
      left: 8px;
      top: 6px;
    }
  }
`;

export const BottomOfCard = styled.div`
  font-family: Archivo, sans-serif;
  font-size: 1.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  b,
  span,
  strong {
    margin: 0 0.25rem;
  }

  p {
    color: var(--text-date);
  }

  span {
    display: inline-block;
    width: 42px;
    text-align: center;
    color: var(--text-percentage);
    background-color: var(--bg-percentage);
  }

  b {
    color: var(--text-list-prices-dark);
    text-decoration: line-through;
  }

  strong {
    color: #fff;
  }
`;
