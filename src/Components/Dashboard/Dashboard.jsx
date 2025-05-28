import React from 'react';
// Importing component-specific styles
import './Dashboard.css';
// Importing data and other reusable components
import { bodyparts } from '../../Data/DashboardData';
import DashCard from '../DashCard/DashCard';
import body from '../../assets/IMG&Svg/body.png';
import scanner from '../../assets/IMG&Svg/scanner (1).svg';
import leg from '../../assets/IMG&Svg/icons8-leg-30.png';
import heart from '../../assets/IMG&Svg/icons8-heart-32.png';
import search from '../../assets/IMG&Svg/search-plus-svgrepo-com.svg';
import line from '../../assets/IMG&Svg/bottomBar.svg';
import rotate from '../../assets/IMG&Svg/rotate_icon.svg';
import downArrow from '../../assets/IMG&Svg/down-direction-navigation-svgrepo-com.svg';
import ActivityGraph from '../ActivityGraph/ActivityGraph';
import ApointmentcCalend from '../Appointment/ApointmentCalender';

const Dashboard = () => {
  return (
    <div className='full-dash'>
      {/* Left section of the dashboard */}
      <div className='dashboard-left'>
        
        {/* Dashboard header with title and dropdown */}
        <div className='head'>
          <h1 style={{ color: '#000080' }}>Dashboard</h1>
          <p style={{ color: '#060dc6' }}>
            This Week
            <span style={{ width: '20px', height: '20px' }}>
              <img src={downArrow} alt='arrow' />
            </span>
          </p>
        </div>

        {/* Main dashboard body with body illustration and cards */}
        <div className='dashboard'>
          
          {/* Human body image with scanner overlays and health indicators */}
          <div className='body'>
            <img src={body} alt='Human body outline' />

            <div className='body-overlay-elements'>
              {/* Scanner icon on the top */}
              <img className='scan1' src={scanner} alt='Scanner icon' />
              
              {/* Heart section with icon and label */}
              <div className='heart'>
                <img src={heart} alt='Heart icon' />
                <p>Healthy Heart</p>
              </div>

              {/* Legs section with icon and label */}
              <div className='legs'>
                <img src={leg} alt='Leg icon' />
                <p>Healthy Leg</p>
              </div>

              {/* Scanner icon on the bottom */}
              <img className='scan2' src={scanner} alt='Scanner icon' />
            </div>

            {/* Search button icon */}
            <div className='search-but'>
              <img src={search} alt='Search icon' />
            </div>

            {/* Decorative line under body */}
            <div className='line'>
              <img src={line} alt='Bottom line visual' />
            </div>

            {/* Rotate icon for body interaction */}
            <div className='rotate'>
              <img src={rotate} alt='Rotate icon' />
            </div>
          </div>

          {/* Dashboard cards showing health insights */}
          <div className='card-section'>
            {bodyparts.map((parts, i) => (
              <DashCard
                key={i}
                image={parts.image}
                text={parts.text}
                color={parts.color}
              />
            ))}
          </div>
        </div>

        {/* Activity graph section */}
        <div className='acti-graph'>
          <ActivityGraph />
        </div>
      </div>

      {/* Right section of the dashboard with appointment calendar */}
      <div className='appointment-Cal'>
        <ApointmentcCalend />
      </div>
    </div>
  );
};

export default Dashboard;
