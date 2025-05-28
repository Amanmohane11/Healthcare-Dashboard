// Importing icons for appointments
import teeth from '../assets/IMG&Svg/icons8-tooth-100 (1).png';
import hand from '../assets/IMG&Svg/icons8-muscles-64.png';
import injection from '../assets/IMG&Svg/icons8-injection-53.png';
import eye from '../assets/IMG&Svg/icons8-eye-48.png';
import heart from '../assets/IMG&Svg/icons8-heart-32.png';
import doctor from '../assets/IMG&Svg/doctor-svgrepo-com (1).svg';

// ================== CALENDAR WEEK DATA ================== //
// Each object represents a day in the weekly calendar
export const calender = [
  {
    day: 'Mon',
    date: '25',
    textColor: 'rgba(0, 0, 128, 1)',
    time1: '10:00',
    time2: '11:00',
    time3: '12:00',
  },
  {
    day: 'Tues',
    date: '26',
    color: 'white',
    textColor: 'rgba(0, 0, 128, 1)',
    bgcolor: 'rgb(173, 216, 205,0.3)', // Background color for the card
    Highlight2: 'rgba(0, 0, 128, 1)',  // Highlight color for time2
    time1: '08:00',
    time2: '09:00',
    time3: '10:00',
  },
  {
    day: 'Wed',
    date: '27',
    textColor: 'rgba(0, 0, 128, 1)',
    time1: '12:00',
    time2: '---',
    time3: '13:00',
  },
  {
    day: 'Thurs',
    date: '28',
    color: 'white',
    textColor: 'rgba(0, 0, 128, 1)',
    Highlight2: 'rgba(0, 0, 128, 0.5)',
    time1: '10:00',
    time2: '11:00',
    time3: '---',
  },
  {
    day: 'Fri',
    date: '29',
    textColor: 'rgba(0, 0, 128, 1)',
    time1: '---',
    time2: '14:00',
    time3: '16:00',
  },
  {
    day: 'Sat',
    date: '30',
    color1: 'white',
    textColor: 'rgba(0, 0, 128, 1)',
    Highlight1: 'rgba(0, 0, 128, 0.5)',
    time1: '12:00',
    time2: '14:00',
    time3: '15:00',
  },
  {
    day: 'Sun',
    date: '31',
    color1: 'white',
    textColor: 'rgba(0, 0, 128, 0.3)',
    Highlight1: 'rgba(0, 0, 128, 0.5)',
    time1: '09:00',
    time2: '10:00',
    time3: '11:00',
  },
];

// ================== TODAY'S APPOINTMENTS ================== //
export const appointment = [
  {
    desig: 'Dentist',
    img: teeth,
    textColor: 'white',
    time: '09:00-11:00',
    name: 'Dr. Cameron Williamson',
    bgcolor: '#000080', // Navy blue
  },
  {
    desig: 'Physiotherapy Appointment',
    img: hand,
    textColor: 'rgba(0, 0, 128, 0.8)',
    time: '11:00-12:00',
    name: 'Dr. Kevin Djones',
    bgcolor: 'rgb(173, 216, 205,0.3)', // Light teal background
  },
];

// ================== THURSDAY'S UPCOMING SCHEDULE ================== //
export const ThursdayShed = [
  {
    desig: 'Health checkup complete',
    img: injection,
    time: '11:00',
    bgcolor: 'rgb(173, 216, 205,0.3)',
  },
  {
    desig: 'Ophthalmologist',
    img: eye,
    time: '14:00',
    bgcolor: 'rgb(173, 216, 205,0.3)',
  },
];

// ================== SATURDAY'S UPCOMING SCHEDULE ================== //
export const SaturdayShed = [
  {
    desig: 'Cardiologist',
    img: heart,
    time: '12:00',
    bgcolor: 'rgb(173, 216, 205,0.3)',
  },
  {
    desig: 'Neurologist',
    img: doctor,
    time: '16:00',
    bgcolor: 'rgb(173, 216, 205,0.3)',
  },
];
