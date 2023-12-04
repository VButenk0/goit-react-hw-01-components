import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import React from 'react';
import { StatSection, StatTitle, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title ? <StatTitle>{title}</StatTitle> : null}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </StatSection>
  );
};
