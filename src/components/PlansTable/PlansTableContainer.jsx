import styled from "styled-components";

const PlansTableContainer = styled.table`
  border-collapse: collapse;
  height: 70vh;
  width: 65vw;

  td,
  th {
    border: 2px dotted var(--colorGray);
    padding: 0.8rem;
    cursor: pointer;
  }

  th {
    font-size: 1.2em;
  }

  td p {
    font-size: 0.8em;
    height: 100%;
  }

  .small-period {
    font-size: 0.6em;
  }

  tr td:nth-child(4),
  tr th:nth-child(4) {
    background-color: var(--colorPrimary);
    color: white;
    border: none;
  }

  .hover {
    background-color: var(--colorSecundary) !important;
    border: none;
    color: #000 !important;
  }
`;

export default PlansTableContainer;
