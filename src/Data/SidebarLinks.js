// ========== Import Icons for Sidebar Links ========== //
import dashboard from '../assets/IMG&Svg/dashboard-svgrepo-com (1).svg';
import history from '../assets/IMG&Svg/arrow-up-arrow-down-svgrepo-com.svg';
import calender from '../assets/IMG&Svg/calendar-date-schedule-svgrepo-com.svg';
import appointment from '../assets/IMG&Svg/search-plus-svgrepo-com.svg';
import statistics from '../assets/IMG&Svg/statistics-graph-svgrepo-com.svg';
import chat from '../assets/IMG&Svg/chat-round-dots-svgrepo-com.svg';
import support from '../assets/IMG&Svg/call-svgrepo-com.svg';

// ========== General Sidebar Links ========== //
// Each object represents a main navigation item with icon, label, and link URL.
export const genralLinks = [
  {
    image: dashboard,
    name: "Dashboard",
    link: "/",  
  },
  {
    image: history,
    name: "History",
    link: "/",  
  },
  {
    image: calender,
    name: "Calender",
    link: "/",  
  },
  {
    image: appointment,
    name: "Appointments",
    link: "",   
  },
  {
    image: statistics,
    name: "Statistics",
    link: "",   
  }
];

// ========== Tools Sidebar Links ========== //
// Represents secondary tools or features accessible from sidebar.
export const Tools = [
  {
    image: chat,
    name: "Chat",
    link: "",  
  },
  {
    image: support,
    name: "Support",
    link: "",  
  }
];
