import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescr,
  Avatar,
  Name,
  Tag,
  Location,
  StatsBox,
  StatsBoxItem,
  StatLabel,
  StatQuant,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <ProfileBox>
      <ProfileDescr>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescr>

      <StatsBox>
        <StatsBoxItem>
          <StatLabel>Followers</StatLabel>
          <StatQuant>{followers}</StatQuant>
        </StatsBoxItem>
        <StatsBoxItem>
          <StatLabel>Views</StatLabel>
          <StatQuant>{views}</StatQuant>
        </StatsBoxItem>
        <StatsBoxItem>
          <StatLabel>Likes</StatLabel>
          <StatQuant>{likes}</StatQuant>
        </StatsBoxItem>
      </StatsBox>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
