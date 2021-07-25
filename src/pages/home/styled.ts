import styled from "styled-components";

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
  }

  .alice-carousel {
    margin: 0 auto;
    .alice-carousel__wrapper {
      border-radius: 5px;
      box-shadow: 0 0 15px 3px rgba(0 0 0 / 20%);
      .alice-carousel__stage-item {
        height: 100%;
      }
    }
  }

  @media (min-width: 700px) {
    width: 100%;
    height: 750px;

    h3 {
      width: 80%;
      font-size: 2.5rem;
      text-align: center;
    }

    .alice-carousel {
      width: 80%;
    }
  }

  @media (min-width: 900px) {
    height: 500px;
  } ;
`;

export const Card = styled.a`
  line-height: 0;
  text-decoration: none;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 900px) {
    display: flex;
    img {
      width: 55%;
    }
  }

  @media (min-width: 1400px) {
    img {
      width: 1000px;
    }
  } ;
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
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
  }

  @media (min-width: 700px) {
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

  @media (min-width: 900px) {
    height: 250px;
  }

  @media (min-width: 1400px) {
    height: 280px;
    padding: 4.5rem;
  } ;
`;

export const Prices = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  b,
  span,
  strong,
  .so-icons {
    padding: 0.25rem;
  }

  span {
    color: var(--text-percentage);
    background-color: var(--bg-percentage);
  }

  b {
    color: var(--text-prices-dark);
    background-color: var(--bg-prices);
    text-decoration: line-through;
  }

  strong {
    color: var(--text-prices-light);
    background-color: var(--bg-prices);
  }

  .so-icons {
    display: flex;
    img {
      width: 22px;
      margin-left: 0.5rem;
    }
  }
`;
