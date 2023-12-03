import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import profileData from '../../data/user.json';
import data from '../../data/data.json';
import { FriendList } from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = profileData;

export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
