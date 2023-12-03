import React from 'react';
import {
  FriendCard,
  OnlineStatus,
  OfflineStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      {isOnline ? <OnlineStatus /> : <OfflineStatus />}
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};
