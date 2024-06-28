import styled from "styled-components";

const SignUpFormContainer = styled.form`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .label-input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .first-last-name-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  input {
    border: none;
    border: 1px solid var(--colorGray);
    padding: 0.5rem;
    border-radius: 0.6rem;
  }

  .text-according {
    text-align: justify;
  }

  a {
    text-decoration: underline;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    border: none;
    border-radius: 0.6rem;
    background-color: var(--colorPrimary);
    color: var(--colorWhite);
    height: 2.5rem;
    font-weight: 900;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
  }

  @media (max-width: 425px) {
    .first-last-name-group {
      flex-direction: column;
    }
  }
`;

export default SignUpFormContainer;
