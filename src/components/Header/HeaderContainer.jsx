import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 5rem;
  width: 100%;
  min-height: 4rem;
  background-color: var(--colorPrimary);

  .login-area-header {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .descricao-login {
    color: var(--colorGray);
  }

  .image-user-container {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--colorWhite);
  }

  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;

    .login-area-header {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
  }
`;

export default HeaderContainer;
