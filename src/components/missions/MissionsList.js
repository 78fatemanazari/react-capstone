import React from 'react';
import PropTypes from 'prop-types';

const MissionsList = ({
  missions, loading, error, handleJoinMissions, handleLeaveMissions,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

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
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <button type="button">
                    Active Member
                  </button>
                ) : (
                  <button type="button">
                    Not Member
                  </button>
                )}
              </td>
              <td>
                {mission.reserved ? (
                  <button type="button" onClick={() => handleLeaveMissions(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleJoinMissions(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.number.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleJoinMissions: PropTypes.func.isRequired,
  handleLeaveMissions: PropTypes.func.isRequired,
};

MissionsList.defaultProps = {
  error: null,
};

export default MissionsList;
