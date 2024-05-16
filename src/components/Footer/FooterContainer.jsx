import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem 5rem 3rem 5rem;
  background-color: var(--colorSecundary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  a {
    color: var(--colorBlack);
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .title-icon-social-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .title-footer {
    color: var(--colorWhite);
  }

  .social-icons {
    display: flex;
    gap: 0.5rem;
  }

  i {
    border: 1px solid var(--colorBlack);
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    font-size: 1.2em;
  }
`;

export default FooterContainer;
