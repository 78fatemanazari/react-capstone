import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketSlice';
// import { v4 as uuidv4 } from 'uuid';

import styles from '../../styles/RocketsItem.module.css';

const RocketsItem = ({
  id, imgPath, rocketName, active, description,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={`container ${styles.element}`}>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <img alt="rocket_img" src={imgPath} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3>
            {rocketName}
          </h3>
          {active ? (
            <p>{description}</p>
          ) : (
            <p className={styles.reserved}>{description}</p>
          )}
          {active ? (
            <button type="button" className={styles.btnReserve} onClick={() => dispatch(reserveRocket({ id }))}>
              Reserve Rocket
            </button>
          ) : (
            <button type="button" className={styles.btnCancel} onClick={() => dispatch(cancelRocket({ id }))}>
              Cancel Reservation
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

// RocketsItem.defaultProps = {
//   id: uuidv4(),
// };

RocketsItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketsItem;
