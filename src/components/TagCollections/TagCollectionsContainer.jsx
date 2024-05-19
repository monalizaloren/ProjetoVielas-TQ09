import styled from "styled-components";

const TagCollectionsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: var(--colorBlack);
    text-decoration: underline;
    font-style: italic;
  }
`;

export default TagCollectionsContainer;
