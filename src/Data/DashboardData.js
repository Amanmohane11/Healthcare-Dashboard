// ========== Import Images for Body Parts ========== //
import lung from '../assets/IMG&Svg/lungs-svgrepo-com (1).svg';
import teeth from '../assets/IMG&Svg/icons8-tooth-100 (1).png';
import bone from '../assets/IMG&Svg/icons8-bone-48.png';

// ========== BODY PARTS INFO (For Dashboard Cards) ========== //
// Each object represents a body part with an image, label, and highlight color.
export const bodyparts = [
  {
    image: lung,
    text: "Lungs",
    color: "#FF0000", // Red
  },
  {
    image: teeth,
    text: "Teeth",
    color: "#87CEEB", // Sky Blue
  },
  {
    image: bone,
    text: "Bone",
    color: "#FFA500", // Orange
  },
];

// ========== WEEKLY DAY COLORS (For Calendar or Timetable UI) ========== //
// Each object represents a day's color scheme, probably for time slots .
export const days = [
  {
    day: 'Mon',
    color1: '#d0d0d0',
    color2: '#00FFFF',
    color3: '#d0d0d0',
    color4: '#d0d0d0',
  },
  {
    day: 'Thurs',
    color1: '#d0d0d0',
    color2: '#000080', // Navy blue
    color3: '#d0d0d0',
    color4: '#d0d0d0',
  },
  {
    day: 'Tues',
    color1: '#00FFFF',
    color2: '#000080',
    color3: '#d0d0d0',
    color4: '#00FFFF',
  },
  {
    day: 'Wed',
    color1: '#d0d0d0',
    color2: '#d0d0d0',
    color3: '#00FFFF',
    color4: '#000080',
  },
  {
    day: 'Thurs',
    color1: '#d0d0d0',
    color2: '#000080',
    color3: '#d0d0d0',
    color4: '#d0d0d0',
  },
  {
    day: 'Fri',
    color1: '#000080',
    color2: '#00FFFF',
    color3: '#d0d0d0',
    color4: '#000080',
  },
  {
    day: 'Sat',
    color1: '#d0d0d0',
    color2: '#d0d0d0',
    color3: '#00FFFF',
    color4: '#000080',
  },
  {
    day: 'Sun',
    color1: '#d0d0d0',
    color2: '#00FFFF',
    color3: '#d0d0d0',
    color4: '#000080',
  },
];
