import React from 'react';
// Importing days data from a separate file
import { days } from '../../Data/DashboardData';
// Importing styles specific to this component
import './activityGraph.css';

// Functional component to render the Activity Graph
const ActivityGraph = () => {
  return (
    <div className='activity'>
      {/* Heading Section */}
      <div className='heading'>
        <h2>Activity</h2>
        <p>3 appointments this week</p> {/* Static info about weekly appointments */}
      </div>

      {/* Graph Section - Displaying activity bars for each day */}
      <div className='graph'>
        {/* Iterating over each day to render corresponding bars */}
        {days.map((line, i) => (
          <div key={i} className='graph-day'>
            <div className='bars'>
              {/* Four bars for each day, each with its unique background color */}
              <div className='bar1' style={{ backgroundColor: line.color1 }}></div>
              <div className='bar2' style={{ backgroundColor: line.color2 }}></div>
              <div className='bar3' style={{ backgroundColor: line.color3 }}></div>
              <div className='bar4' style={{ backgroundColor: line.color4 }}></div>
            </div>
            {/* Display the name of the day below the bars */}
            <p className='day'>{line.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
