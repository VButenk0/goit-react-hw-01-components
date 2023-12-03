import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import React from 'react';
import { StatSection, StatTitle, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title ? <StatTitle>{title}</StatTitle> : null}
      <StatList>
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </StatSection>
  );
};
