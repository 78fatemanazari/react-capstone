import RocketsItem from "./RocketsItem";
import PropTypes from 'prop-types';

const RocketsList = ({ rocketsList }) => {
  return (
    <>
      {rocketsList.map((rocket) => {
        <RocketsItem key={rocket.id} imgPath={rocket.img} rocketName={rocket.name} reserved={rocket.reserved} description={rocket.description}/>
      })}
    </>
  );
}

RocketsList.prototype = {
  rocketProps: PropTypes.arrayOf(
    PropTypes.shape({
      imgPath: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      reserved: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RocketsList;