import styled from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 20px auto;
  padding-top: 20px;
  width: 250px;
  overflow: hidden;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray;
`;

export const ProfileDescr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 15px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #122236;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 12px;
  color: #768696;
  margin: 0;
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #768696;
  margin: 0 0 20px 0;
`;

export const StatsBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StatsBoxItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: #f3f6f9;
  border: 1px solid #e4e9f0;
  border-bottom: none;
  width: calc(100% / 3);
`;

export const StatLabel = styled.span`
  font-size: 10px;
  color: #768696;
`;

export const StatQuant = styled.span`
  color: #122236;
  font-weight: 700;
`;
