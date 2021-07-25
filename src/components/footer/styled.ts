import styled from "styled-components";

export const Footer = styled.footer`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 180px;
  gap: 0 0;
  place-items: center;

  .title {
    .logo-social {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;

      img {
        width: 70px;
        height: auto;
      }

      h2 {
        font-size: 2.3rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-left: 1rem;
      }
    }
  }

  .form-content {
    p {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: #fff;
    }
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 5rem;
    place-items: initial;

    .form-content {
      p {
        font-size: 1.8rem;
      }
    }
  }
`;

export const FooterText = styled.p`
  width: 90%;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 3rem 1rem 2rem 3rem;
  color: #fff;

  @media (min-width: 700px) {
    width: 100%;
    margin: 3rem auto 3rem;
  }
`;
