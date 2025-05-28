import React from 'react';
// Importing styles for the DashCard component
import './DashCard.css';

// Functional component that accepts image, text, and color as props
const DashCard = ({ image, text, color }) => {

  // Getting the current date in 'dd Month yyyy' format
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className='cards'>
      
      {/* Top section with image and label text */}
      <div className='card-1'>
        <img src={image} alt='image' />
        <p>{text}</p>
      </div>

      {/* Displaying current date */}
      <p className='Date'>Date: <span>{currentDate}</span></p>

      {/* Progress bar with dynamic width and color */}
      <div className='full-bar'>
        <div style={{ width: '70%', background: color }}></div>
      </div>
    </div>
  );
}

export default DashCard;
