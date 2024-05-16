import styled from "styled-components";

const SearchContainer = styled.section`
  position: relative;
  margin: 2rem;
  width: 50%;

  input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.8rem;
    border: none;
    border: 1px solid var(--colorDarkGray);
    border-radius: 1rem;
  }

  ::-webkit-input-placeholder {
    font-family: var(--defaultFont);
    color: var(--colorGray);
  }
`;

export default SearchContainer;
