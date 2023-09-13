import { useSelector } from 'react-redux';
// import ProfileRockets from '../ProfileLogic/ProfileRockets';
import ProfileRockets from './rockets/ProfileRockets';
import MissionsProfile from './missions/MissionsProfile';

const MyProfile = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rocket);

  if (isLoading) {
    return <div>Content is loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!!!</div>;
  }

  return (
    <div className="container">
      <div>
        <p className="profile-title">
          My Missions
        </p>
        <MissionsProfile />
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul>
          <ProfileRockets rocketProps={rockets} />
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
