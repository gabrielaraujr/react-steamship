import styled from "styled-components";

export const CrudContent = styled.main`
  width: 100%;
  height: 80%;
  margin-top: 20rem;

  .backIcon {
    width: 70%;
    margin: 0 auto 5rem;
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
  }
`;

export const UserCrud = styled.article`
  width: 70%;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 15px 2px rgba(0 0 0 / 10%);
  padding: 1.4rem 2.5rem;
  margin: 0 auto 20rem;

  display: flex;
  align-items: center;
  justify-content: center;

  :last-child {
    margin-bottom: 0;
  }

  ul {
    width: 100%;
    text-decoration: none;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
  }

  .user-img {
    img {
      width: 60px;
      border-radius: 50%;
      box-shadow: 0 0 15px 2px rgba(0 0 0 / 20%);

      @media (min-width: 700px) {
        width: 75px;
      }
    }
  }

  .user-info {
    width: 100%;
    height: 100%;
    margin-left: 2.5rem;

    .user-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 35px;

      h3 {
        font-size: 1.7rem;
        font-weight: 500;
      }
    }

    .card-body {
      display: flex;
      align-items: center;
      flex-direction: row;
      height: 35px;

      p {
        color: #969696;
        font-weight: 400;
      }

      p,
      strong {
        font-size: 1.3rem;
      }

      strong {
        color: #3b3b3b;
        font-weight: 500;
        margin-right: 0.5rem;
      }

      b {
        color: #888888;
        margin: 0 0.5rem;
      }
    }

    footer.card-body {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        flex-direction: row;
      }

      div:last-child {
        margin-right: -5px;
      }

      p {
        margin-right: 0.35rem;
      }
    }
  }

  @media (min-width: 700px) {
    padding: 2rem 4rem;

    .user-info {
      margin-left: 4rem;
    }
  } ;
`;

export const TypeInfo = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.5px;

  color: var(--ship-blue);
  background-color: #ddf0fc;

  border-radius: 4rem;
  margin: 0;
  padding: 0.5rem 3rem;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  padding: 0.75rem 1rem 0.5rem;
  margin: 1rem;
  cursor: pointer;
  background: var(--hiring-button-hover);
  transition: all 0.25s;
  :hover {
    background: #7caad0;
  }
`;
