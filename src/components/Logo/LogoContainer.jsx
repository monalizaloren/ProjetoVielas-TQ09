import styled from "styled-components";

const LogoContainer = styled.section`
  .logo-link {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
  }

  .rows-logo {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .row-logo {
    border: none;
    background-color: white;
    width: 3.5rem;
    height: 0.5rem;
  }

  .title-logo {
    color: var(--corBranco);
    font-size: 1.8em;
  }
`;
export default LogoContainer;
