import styled from "styled-components";

const CollectionContainer = styled.section`
  width: 36rem;

  .link-collection {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--colorBlack);
  }

  .collection-image-container {
    width: 18rem;
  }

  .image-collection {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 425px) {
    width: 100%;

    .link-collection {
      flex-direction: column;
    }

    .title-description-colection-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export default CollectionContainer;
