import React, { useState } from 'react';
// Importing styles for the Header component
import './Header.css';

// Importing assets
import appointment from '../../assets/IMG&Svg/plus-square-svgrepo-com.svg';
import profile from '../../assets/IMG&Svg/profile.jpg';
import search from '../../assets/IMG&Svg/search-4-svgrepo-com.svg';
import notify from '../../assets/IMG&Svg/notification-svgrepo-com.svg';

const Header = () => {
  // State to manage the value of the search input
  const [input, setInput] = useState();

  return (
    <div className='header'>
      
      {/* Left section of the header with title, search, and notification */}
      <div className='header1'>
        {/* App title */}
        <h1 className='title'>
          Health<span className='title-sub'>Care.</span>
        </h1>

        {/* Search input with icon */}
        <div className='wrap'>
          <span className='search-icon'>
            <img src={search} alt='search' />
          </span>
          <input
            onChange={(e) => setInput(e.target.value)}
            className='search'
            type='text'
            value={input}
            placeholder='Search...'
          />
        </div>

        {/* Notification button */}
        <button className='notify'>
          <img src={notify} alt='notification' />
        </button>
      </div>

      {/* Right section with profile and appointment buttons */}
      <div className='header2'>
        {/* Profile picture button */}
        <button className='profile-but'>
          <img className='profile' src={profile} alt='profilePic' />
        </button>

        {/* Appointment button */}
        <button className='appointment-but'>
          <img className='appointment' src={appointment} alt='Appointment' />
        </button>
      </div>
    </div>
  );
};

export default Header;
