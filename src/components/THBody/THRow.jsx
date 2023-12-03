import React from 'react';
import { TableData } from './THRow.styled';

export const THRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </tr>
  );
};
