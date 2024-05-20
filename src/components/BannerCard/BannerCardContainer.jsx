import styled from "styled-components";

const BannerCardContainer = styled.section`
  background-color: var(--colorPrimary);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--colorWhite);
  width: 36%;
  padding: 1rem;

  h1 {
    font-size: 1.8em;
  }

  p {
    font-style: italic;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export default BannerCardContainer;
