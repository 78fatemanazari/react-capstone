import { useSelector } from 'react-redux';
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
      <section className="missions">
        <div className="profile-title">
          My Missions
        </div>
        <MissionsProfile />
      </section>
      <section className="rockets">
        <div className="profile-title">
          My Rockets
        </div>
        <ProfileRockets rocketProps={rockets} />
      </section>
    </div>
  );
};

export default MyProfile;
