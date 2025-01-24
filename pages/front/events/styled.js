import styled from "styled-components";

export const Table = styled.table`
  overflow: hidden;
  border-collapse: collapse;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;

  th {
    background-color: #4a524a;
    color: white;
  }

  td,
  th {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
    padding: 10px;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  tfoot {
    background-color: #4a524a;
    color: white;
  }
`;
