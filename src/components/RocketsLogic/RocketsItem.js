import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const RocketsItem = ({ 
  id, imgPath, rocketName, reserved, description 
}) => {
  return (
    <li>
      <div>
        <img src={imgPath}></img>
      </div>
      <div>
        <h1>
          {rocketName}
        </h1>
        <h2>
          {reserved}
        </h2>
        <p>
          {description}
        </p>
        <button>
          if reserved or not
        </button>
      </div>
    </li>
  );
}

RocketsItem.defaultProps = {
  id: uuidv4(),
}

RocketsItem.prototype = {
  imgPath: PropTypes.node.isRequired,
  rocketName: PropTypes.node.isRequired,
  reserved: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};


export default RocketsItem;