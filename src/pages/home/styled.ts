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

  @media (min-width: 1000px) {
    height: 500px;
  }
`;
