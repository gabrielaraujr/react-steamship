import styled from "styled-components";

export const CartItems = styled.section`
  width: 100%;
  height: 100%;
  margin: 3rem auto 14rem;
  z-index: 1000;

  h2 {
    width: 60%;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    margin: 0 auto 1.5rem auto;
    text-shadow: 3px 4px 0px black;
  }
`;

export const BackNavigation = styled.div`
  width: 60%;
  margin: 15rem auto 4rem;
  display: flex;
  align-items: center;

  h3 {
    color: #fff;
    font-size: 2rem;
    margin-left: 1.5rem;
  }

  img {
    width: 40px;
    :hover {
      cursor: pointer;
      filter: brightness(0.7);
    }
  }
`;
