import styled from "styled-components";

export const SocialMediaContent = styled.div`
  padding: 0.7rem 0 0 2rem;

  img {
    width: 30px;
    height: 30px;
    margin-left: 2rem;
    transition: all 0.25s;
    :hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 700px) {
    padding: 0;

    img {
      margin-left: 0;
      margin-right: 2rem;
    }
  }
`;
