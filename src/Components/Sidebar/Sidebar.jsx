import React from 'react';
// Importing sidebar styles
import './Sidebar.css';
// Importing link data for General and Tools sections
import { genralLinks, Tools } from '../../Data/SidebarLinks';
// Importing static image for Settings
import setting from '../../assets/IMG&Svg/setting-5-svgrepo-com.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      {/* General Section */}
      <div className='general'>
        <p>General</p>
        {genralLinks.map((item, i) => (
          <a key={i} to={item.link}>
            <img src={item.image} alt='image' />
            <p>{item.name}</p>
          </a>
        ))}
      </div>

      {/* Tools Section */}
      <div className='tools'>
        <p className='tool'>Tools</p>
        {Tools.map((item, i) => (
          <a key={i} to="">
            <img src={item.image} alt='image' />
            <p>{item.name}</p>
          </a>
        ))}
      </div>

      {/* Settings Section */}
      <div className='setting'>
        <a to="">
          <img src={setting} alt='image' />
          <p>Setting</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
