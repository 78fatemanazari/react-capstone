import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

const RocketsItem = ({
  imgPath, rocketName, active, description,
}) => (
  <li>
    <div>
      <img alt="rocket_img" src={imgPath} />
    </div>
    <div>
      <h1>
        {rocketName}
      </h1>
      <h2>
        {active ? 'active' : 'not active'}
      </h2>
      <p>
        {description}
      </p>
      <button type="button">
        if reserved or not
      </button>
    </div>
  </li>
);

// RocketsItem.defaultProps = {
//   id: uuidv4(),
// };

RocketsItem.propTypes = {
  imgPath: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketsItem;
