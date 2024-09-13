import React from 'react';
import '../css/Settings.css';
import editProfileIcon from '../images/edit-profile.png';   // Importing your images
import accountIcon from '../images/account.png';
import homeIcon from '../images/home.png';
import playIcon from '../images/play.png';
import coachIcon from '../images/coach.png';
import rateIcon from '../images/rate.png';
import logoutIcon from '../images/logout.png';
import languageIcon from '../images/language.png';
 
const Settings = () => {
  return (
    <div className="settings-container">
      <h1 className="settings-heading">Settings</h1>
      <div className="settings-options">
        <button className="settings-btn">
          <img src={editProfileIcon} alt="Edit Profile" className="icon" />
          Edit Profile
        </button>
        <button className="settings-btn">
          <img src={accountIcon} alt="Account" className="icon" />
          Account
        </button>
        <button className="settings-btn">
          <img src={homeIcon} alt="Home" className="icon" />
          Home
        </button>
        <button className="settings-btn">
          <img src={playIcon} alt="Play" className="icon" />
          Play
        </button>
        <button className="settings-btn">
          <img src={coachIcon} alt="Coach" className="icon" />
          Coach
        </button>
        <button className="settings-btn">
          <img src={rateIcon} alt="Rate this website" className="icon" />
          Rate this website
        </button>
        <button className="settings-btn">
          <img src={logoutIcon} alt="Logout" className="icon" />
          Logout
        </button>
        <button className="settings-btn">
          <img src={languageIcon} alt="Language" className="icon" />
          Language
        </button>
      </div>
    </div>
  );
};
 
export default Settings;