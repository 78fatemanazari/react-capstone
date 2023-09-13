import PropTypes from 'prop-types';
import RocketsItem from './RocketsItem';

const RocketsList = ({ rocketsProps }) => (
  <>
    {rocketsProps.map((rocket) => (
      <RocketsItem
        key={rocket.id}
        id={rocket.id}
        imgPath={rocket.imgPath}
        rocketName={rocket.rocketName}
        active={rocket.active}
        description={rocket.description}
      />
    ))}
  </>
);

RocketsList.propTypes = {
  rocketsProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgPath: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RocketsList;
