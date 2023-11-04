import React, { useEffect, useState } from 'react';
import BasicDateCalendar, * as calendar from './calendar.jsx';
import { createRoot } from 'react-dom/client';
import TaskCard from './taskCard.jsx';
import TaskList from './TaskList.jsx';
import '/styles/container.scss';
const App = () => {
  return (
    <div className='container'>
    <BasicDateCalendar/>
    <TaskList/> <br/>
    <TaskCard/><br/>
  </div>
  )
};
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
export default App;
//if aria-selectd is true then display task associated with that 
//conditionally render a card component of some sort