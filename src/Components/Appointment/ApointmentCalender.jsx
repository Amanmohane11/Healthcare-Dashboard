import React from 'react';
// Importing component-specific styles
import './AppointmentCal.css';
// Importing the AppointmentCard component
import AppointmentCard from '../AppointmCard/AppointmentCard';
// Importing arrow icons for calendar navigation
import arrow1 from '../../assets/IMG&Svg/right-arrow-svgrepo-com.svg';
import arrow2 from '../../assets/IMG&Svg/right-arrow-svgrepo-com (1).svg';
// Importing data for the calendar and appointments
import { calender, appointment, ThursdayShed, SaturdayShed } from '../../Data/AppointmentData';

const ApointmentcCalend = () => {
  return (
    <div className='calender'>
      {/* Header section with month and arrow icons */}
      <div className=''>
        <div className='heading-cal'>
          <h1>October 2021</h1>
          <div className='arrow'>
            <img src={arrow1} alt='arrow' />
            <img src={arrow2} alt='arrow' />
          </div>
        </div>

        {/* Calendar grid displaying days and appointment slots */}
        <div className='calendar-grid'>
          {calender.map((data, i) => (
            <div 
              key={i} 
              className='sec-day' 
              style={{ backgroundColor: data.bgcolor, color: data.textColor }}
            >
              <div>{data.day}</div>
              <div>{data.date}</div>
              {/* Time slots with optional highlighting */}
              <div style={{ backgroundColor: data.Highlight1, color: data.color1 }}>{data.time1}</div>
              <div style={{ backgroundColor: data.Highlight2, color: data.color }}>{data.time2}</div>
              <div>{data.time3}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment cards section */}
      <div className='appoint'>
        {appointment.map((data, i) => (
          <AppointmentCard
            key={i}
            textColor={data.textColor}
            image={data.img}
            desig={data.desig}
            name={data.name}
            time={data.time}
            bgcolor={data.bgcolor}
          />
        ))}
      </div>

      {/* Upcoming Schedule section */}
      <div className='shedule'>
        <h1>The Upcoming Schedule</h1>

        {/* Thursday schedule */}
        <p>on Thursday</p>
        <div className='shedule1'>
          {ThursdayShed.map((data, i) => (
            <AppointmentCard
              key={i}
              textColor={data.textColor}
              image={data.img}
              desig={data.desig}
              name={data.name}
              time={data.time}
              bgcolor={data.bgcolor}
            />
          ))}
        </div>

        {/* Saturday schedule */}
        <p>on Saturday</p>
        <div className='shedule2'>
          {SaturdayShed.map((data, i) => (
            <AppointmentCard
              key={i}
              textColor={data.textColor}
              image={data.img}
              desig={data.desig}
              name={data.name}
              time={data.time}
              bgcolor={data.bgcolor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApointmentcCalend;