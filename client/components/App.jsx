import React, { createContext, useEffect, useState, useContext } from 'react';
import BasicDateCalendar, * as calendar from './calendar.jsx';
import { createRoot } from 'react-dom/client';
import TaskCard from './taskCard.jsx';
import TaskList from './TaskList.jsx';
import '/styles/container.scss';

const App = () => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='container'>
    <BasicDateCalendar onDateChange={handleDateChange} />
    <TaskList selectedDate={selectedDate}/> <br/>
    <TaskCard selectedDate={selectedDate}/><br/>
  </div>
  )
};
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
export default App;
//if aria-selectd is true then display task associated with that 
//conditionally render a card component of some sort