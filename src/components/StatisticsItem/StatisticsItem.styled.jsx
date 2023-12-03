import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;

  width: 20%;
  padding: 15px;
  background-color: ${({ $bgColor }) =>
    `rgb(${$bgColor.red}, ${$bgColor.green}, ${$bgColor.blue})`};
`;

export const StatItemLabel = styled.span`
  font-size: 12px;
`;

export const StatItemPercent = styled.span`
  font-size: 20px;
`;
