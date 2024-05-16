import styled from "styled-components";

const FooterContainer = styled.footer`
  /* RETIRAR DEPOIS */
  position: absolute;
  bottom: 0;
  /* -------------- */

  width: 100%;
  padding: 1rem 5rem 3rem 5rem;
  background-color: var(--colorSecundary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

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
    border: 1px solid #000;
    border-radius: 50%;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    font-size: 1.2em;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default FooterContainer;
