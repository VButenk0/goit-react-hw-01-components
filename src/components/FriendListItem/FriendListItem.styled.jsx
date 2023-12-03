import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 1px 2px lightgrey;
  padding: 10px;
`;

export const OnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
`;

export const OfflineStatus = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
