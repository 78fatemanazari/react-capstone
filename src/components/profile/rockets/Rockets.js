import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RocketsList from './RocketsList';
import { getResultItems } from '../../../redux/rockets/rocketSlice';

// import styles from '../../styles/Rockets.module.css';
import styles from '../../../styles/Rockets.module.css';

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((store) => store.rocket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResultItems());
  }, []);

  if (isLoading) {
    return <div>Content is loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!!!</div>;
  }

  return (
    <div>
      <div className="container text-center">
        <hr />
      </div>
      <ul className={styles.listUnstyled}>
        <RocketsList rocketsProps={rockets} />
      </ul>
    </div>
  );
};

export default Rockets;
