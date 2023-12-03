import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 20px;
  width: 800px;
  box-shadow: 0px 2px 5px gray;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  height: 50px;
`;

export const TableHeader = styled.th`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
`;

export const TableBody = styled.tbody`
  border-color: #e4e4e4;

  & tr:nth-child(odd) {
    background-color: #ffffff;
  }
  & tr:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
