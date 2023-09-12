import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RocketsList from './RocketsList';
import { getResultItems } from '../../redux/rockets/rocketSlice';

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
      <h1>Rockets Page</h1>
      <ul>
        <RocketsList rocketsProps={rockets} />
      </ul>
    </div>
  );
};

export default Rockets;
