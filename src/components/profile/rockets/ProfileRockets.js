import PropTypes from 'prop-types';

const ProfileRockets = ({ rocketProps }) => {
  const myPersonalData = rocketProps.filter((rocket) => rocket.active === true);

  return (
    <>
      <ul className="reserved-rocket-list">
        {myPersonalData.map((rocket) => (
          <li key={rocket.id}>{rocket.rocketName}</li>
        ))}
      </ul>
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
