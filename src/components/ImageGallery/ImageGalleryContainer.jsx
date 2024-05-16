import styled from "styled-components";

const ImageGalleryContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 3rem;

  img {
    width: 18rem;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    a {
      width: calc(33.3% - 16px);
    }
    img {
      width: 100%;
    }
  }
`;

export default ImageGalleryContainer;
