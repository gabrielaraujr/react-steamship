import styled from "styled-components";

export const NewsletterSection = styled.section`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: var(--ship-black);

  div {
    width: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-family: Archivo, sans-serif;
      font-size: 3.2rem;
      margin-bottom: 6rem;
    }

    p {
      font-family: Montserrat, sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 700px) {
    height: 400px;

    div {
      width: 100%;
      text-align: left;

      h2 {
        font-size: 4rem;
        margin-bottom: 5rem;
      }

      p {
        font-size: 2rem;
        font-weight: 400;
      }

      form {
        width: 600px;
      }
    }
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 4.5rem;
    }
    p {
      font-size: 2.1rem;
    }
  }
`;
