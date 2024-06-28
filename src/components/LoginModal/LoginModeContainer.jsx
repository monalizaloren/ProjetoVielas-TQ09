import styled from "styled-components";

const LoginModalConatiner = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  margin: 1rem;

  .content-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--colorPrimary);
    padding: 2rem 2rem 0 2rem;
    gap: 1rem;
    width: 28rem;
    height: 25rem;
  }

  .btn-close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 1.5em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .title-modal {
    color: var(--colorWhite);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input[type="email"],
  input[type="password"] {
    border: none;
    border-radius: 1.2rem;
    padding: 0.5rem 0.5rem 0.5rem 1.2rem;
    font-size: 1.2em;
  }

  ::-webkit-input-placeholder {
    color: var(--colorBlack);
    font-family: var(--defaultFont);
  }

  small {
    font-size: 0.8em;
    font-weight: bold;
  }

  .input-checkbox-container {
    align-self: flex-start;
    margin-left: 2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .btn-enter {
    color: var(--colorSecundary);
    font-weight: bolder;
    font-family: var(--defaultFont);
    border-radius: 1rem;
    border: none;
    width: 10rem;
    height: 2.8rem;
    align-self: center;
    font-size: 1.5em;
    cursor: pointer;
  }

  .text-forgot-password {
    margin-top: 1.5rem;
    align-self: center;
  }

  .link-forgot-password {
    font-weight: lighter;
    text-decoration: underline;
  }

  .link-sign-up {
    align-self: center;
    color: var(--colorWhite);
    font-weight: 700;
  }

  .link-sign-up:hover {
    text-shadow: 1px 1px 1px black;
  }
`;

export default LoginModalConatiner;
