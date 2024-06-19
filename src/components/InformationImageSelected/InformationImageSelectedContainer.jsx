import styled from "styled-components";

const InformationImageSelectedContainer = styled.section`
  display: flex;
  gap: 1rem;

  .image-selected-container {
    height: 24rem;
  }

  .image-selected {
    object-fit: cover;
    height: 100%;
  }

  .information-more-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.8em 0;
  }

  .information-image-selected {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
  }

  .description-image-selected {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 50%;
  }

  .owner-image-selected {
    color: var(--colorSecundary);
  }

  .btn-image-selected {
    border: none;
    background-color: var(--colorPrimary);
    border-radius: 0.8rem;
    padding: 0.5rem;
    height: 3rem;
    width: 8.5rem;
    font-size: 1.7em;
    font-weight: bold;
    color: var(--colorWhite);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .information-more-button {
      gap: 1rem;
      width: 100%;
    }

    @media (max-width: 425px) {
      .image-selected-container {
        height: 16rem;
      }
      .information-more-button {
        max-width: 100vw;
      }
    }
  }
`;

export default InformationImageSelectedContainer;
