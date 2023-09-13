import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../Redux/missions/missionsSlice';
import MissionsList from './MissionsList';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMissions = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMissions = (missionId) => {
    dispatch(leaveMission(missionId));
  };
  return (
    <MissionsList
      missions={missions}
      isLoading={isLoading}
      error={error}
      handleJoinMissions={handleJoinMissions}
      handleLeaveMissions={handleLeaveMissions}
    />
  );
};

export default Missions;
