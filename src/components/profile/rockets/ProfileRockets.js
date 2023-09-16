import PropTypes from 'prop-types';
import styles from '../../../styles/ProfileRockets.module.css';

const ProfileRockets = ({ rocketProps }) => {
  const myPersonalData = rocketProps.filter((rocket) => rocket.active === false);

  if (myPersonalData.length > 0) {
    return (
      <>
        <ul className="reserved-rocket-list">
          {myPersonalData.map((rocket) => (
            <li key={rocket.id}>{rocket.rocketName}</li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <>
      <div className={styles.noRockets}>
        You do not have any rockets!
      </div>
    </>
  );
};

ProfileRockets.propTypes = {
  rocketProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgPath: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileRockets;
