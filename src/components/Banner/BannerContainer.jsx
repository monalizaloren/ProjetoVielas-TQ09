import styled from "styled-components";

const BannerContainer = styled.section`
  width: 100%;
  height: 22rem;
  gap: 0.5rem;

  display: flex;

  @media (max-width: 599px) {
    flex-direction: column;
    height: auto;
  }
`;

export default BannerContainer;
