import styled from "styled-components";

const BannerCarouselContainer = styled.section`
  width: 64%;

  img {
    width: 100%;
    object-fit: cover;
    height: 22rem;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export default BannerCarouselContainer;
