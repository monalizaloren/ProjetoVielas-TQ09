import styled from "styled-components";

const TagCollectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  a {
    color: var(--colorBlack);
    text-decoration: underline;
    font-style: italic;
  }
`;

export default TagCollectionsContainer;
