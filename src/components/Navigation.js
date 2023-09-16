import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet.png';

const Navigation = () => {
  const navLinkStyles = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });
  return (
    <div className="nav-container">
      <div className="navs">
        <img className="logo" src={Logo} width="50" height="50" alt="logo" />
        <h2>Space Traveler&apos; s Hub</h2>
      </div>
      <div>
        <NavLink className="nav-links" style={navLinkStyles} to="/">Rockets</NavLink>
        <NavLink className="nav-links" style={navLinkStyles} to="/messions">Missions</NavLink>
        <NavLink className="nav-links" style={navLinkStyles} to="/myprofile">My Profile</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
