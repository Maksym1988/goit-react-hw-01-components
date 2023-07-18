import user from 'data/user.json';
import css from './App.module.css';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
  return (
    <div className={css.section}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
