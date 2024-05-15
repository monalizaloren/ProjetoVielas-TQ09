import styled from "styled-components";

const LoginAreaHeaderContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;

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

export default LoginAreaHeaderContainer;
