import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../../Redux/missions/missionsSlice';
import './MissionsProfile.css';

const MissionsProfile = () => {
  const dispatch = useDispatch();
  const { missions, reservedMissions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const reservedList = missions.filter((mission) => reservedMissions.includes(mission.mission_id));

  return (
    <>
      {reservedList.length === 0 ? (
        <p className="no-missions">You do not have any missions!</p>
      ) : (
        <ul className="joined-mission-list">
          {reservedList.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MissionsProfile;
