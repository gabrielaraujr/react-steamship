import styled from "styled-components";

export const NewsletterForm = styled.form`
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
  :hover {
    background-color: #029947;
  }

  @media (min-width: 700px) {
    padding: 1.89rem 3rem;
  }
`;
