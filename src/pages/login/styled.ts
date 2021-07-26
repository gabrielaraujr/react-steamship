import styled, { css } from "styled-components";
import bgHiring from "assets/images/bg-hiring-30.jpg";
import sideImg from "assets/images/side-image.jpg";

const LoginContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgHiring}) no-repeat top;
  background-size: cover;
  font: 500 1.6rem Poppins;
  ${LoginContainer};
`;

export const LoginCard = styled.div`
  width: 80vw;
  height: 70vh;
  max-width: 800px;

  background: #fff;
  box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
  border-radius: 2rem;
  padding: 0 3rem;
  ${LoginContainer};

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
      "image logo"
      "image form";
    padding: 0;
    justify-items: center;
  }
`;

export const LogoContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  img {
    width: 100px;
    height: auto;
  }

  h3 {
    font-size: Archivo, sans-serif;
    font-size: 2rem;
    text-shadow: 3px 3px 0 var(--hiring-button-hover);
    color: #474747;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    color: #474747;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    align-self: end;
    grid-area: logo;
  }
`;

export const Input = styled.input`
  height: 5rem;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  outline: none;
  padding: 0.4rem 1.5rem;
  margin-bottom: 1rem;

  font: 300 1.4rem Poppins;
  color: #666666;
  transition: all 0.25s ease-out;
`;

export const Button = styled.button`
  font-family: Archivo, sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: var(--hiring-main);
  padding: 1.87rem 3rem;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background-color: var(--hiring-button-hover);
  }
`;

export const LoginForm = styled.form`
  width: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: 1.5rem;
  }

  .forgot {
    font: 300 1.3rem Poppins;
    color: var(--color-text-complement);
    display: flex;
    align-self: center;
    transition: all 0.3s;

    :hover {
      color: var(--nordil-blue);
      text-decoration: none;
    }
  }

  @media (min-width: 700px) {
    align-self: start;
    grid-area: form;
  }
`;

export const SideImage = styled.div`
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
    grid-area: image;

    background: url(${sideImg}) no-repeat center;
    background-size: cover;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`;
