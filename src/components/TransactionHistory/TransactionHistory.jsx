import React from 'react';
import { THRow } from 'components/THRow/THRow';
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
        {items.map(({ id, type, amount, currency }) => (
          <THRow key={id} type={type} amount={amount} currency={currency} />
        ))}
      </TableBody>
    </Table>
  );
};
