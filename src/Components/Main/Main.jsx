import React from 'react';
// Importing the main layout styling
import './main.css';
// Importing child components
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../Dashboard/Dashboard';

const Main = () => {
  return (
    // Main container that holds both Sidebar and Dashboard
    <div className='main'>
      {/* Sidebar navigation component */}
      <Sidebar />

      {/* Main dashboard content */}
      <Dashboard />
    </div>
  );
};

export default Main;
