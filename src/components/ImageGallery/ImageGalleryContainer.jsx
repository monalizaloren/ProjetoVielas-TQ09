import styled from "styled-components";

const ImageGalleryContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    width: 18rem;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;

    a {
      width: calc(33.3% - 16px);
    }
    img {
      width: 100%;
    }
  }
`;

export default ImageGalleryContainer;
