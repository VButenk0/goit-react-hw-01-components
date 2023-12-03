import React from 'react';
import { getRandomBgColor } from 'helpers/getRandomBgColor';
import {
  StatItem,
  StatItemLabel,
  StatItemPercent,
} from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem $bgColor={getRandomBgColor()}>
      <StatItemLabel>{label}</StatItemLabel>
      <StatItemPercent>{percentage}%</StatItemPercent>
    </StatItem>
  );
};
