import { useSelector } from 'react-redux';
import ProfileRockets from './ProfileRockets';

import styles from '../../styles/MyProfile.module.css';

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
      <div className="container text-center">
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6">
          <h1>My Missions</h1>
          <ul />
        </div>
        <div className="col-md-6">
          <h1>My Rockets</h1>
          <ul className={styles.fullWidth}>
            <ProfileRockets rocketProps={rockets} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
