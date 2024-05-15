import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5rem;
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
`;

export default HeaderContainer;
