import React from 'react';
import PropTypes from 'prop-types';
import './MissionsList.css';

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
    <div className="missions-container">
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td className="bold-text">{mission.mission_name}</td>
              <td className="thin-text">{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <button className="active-member status-button" type="button">
                    Active Member
                  </button>
                ) : (
                  <button className="not-active-member status-button" type="button">
                    NOT A MEMBER
                  </button>
                )}
              </td>
              <td>
                {mission.reserved ? (
                  <button className="actions-button leave-btn" type="button" onClick={() => handleLeaveMissions(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button 
                    className="actions-button join-btn"
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
