import React from 'react';
// Importing styles for the appointment card component
import './appointmentcard.css';

// Functional component to display an appointment card
const AppointmentCard = (props) => {
  return (
    // Card container with dynamic background and text color based on props
    <div 
      className='card' 
      style={{ backgroundColor: props.bgcolor, color: props.textColor }}
    >
      {/* Displaying designation with an image on the right */}
      <h2>
        {props.desig} 
        <span>
          <img src={props.image} alt='img' />
        </span>
      </h2>

      {/* Displaying time of the appointment */}
      <p>{props.time}</p>

      {/* Displaying name of the person associated with the appointment */}
      <p>{props.name}</p>
    </div>
  );
}

export default AppointmentCard;
