import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/missions/missionsSlice';

const Missions = () => {

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {/* Status value PLACE */}
                <button type="button">Not Member</button>
              </td>
              <td>
                {/* Action buttons PLACE */}
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
