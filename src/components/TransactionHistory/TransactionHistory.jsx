import React from 'react';
import { THRow } from 'components/THBody/THRow';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <THRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};
