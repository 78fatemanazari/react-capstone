import PropTypes from 'prop-types';

import styles from '../../styles/ProfileRockets.module.css';

const ProfileRockets = ({ rocketProps }) => {
  const myPersonalData = rocketProps.filter((rocket) => rocket.active === true);

  return (
    <>
      {myPersonalData.map((rocket) => (
        <li key={rocket.id} className={styles.listUnstyled}>{rocket.rocketName}</li>
      ))}
    </>
  );
};

ProfileRockets.propTypes = {
  rocketProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgPath: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      active: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileRockets;
