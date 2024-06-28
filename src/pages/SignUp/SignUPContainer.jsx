import styled from "styled-components";

const SignUpContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--colorGray);
  padding: 2rem;
  gap: 1rem;
  border-radius: 1rem;

  .image-container {
    height: 30rem;
    width: 20rem;
    box-shadow: 0px 0px 5px black;
  }

  .image-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }

  @media (max-width: 768px) {
    .image-container {
      width: 15rem;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column-reverse;
    border: none;

    .image-container {
      width: 20rem;
      height: 7rem;
    }

    .image-container img {
      object-position: 100% 20%;
    }
  }
`;

export default SignUpContainer;
