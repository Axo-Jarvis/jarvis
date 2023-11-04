import React, { useEffect, useState } from 'react';
import BasicDateCalendar, * as calendar from './calendar.jsx';
import { createRoot } from 'react-dom/client';
const App = () => {
  return (
    <div>
    <BasicDateCalendar/>
  </div>
  )
};
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
export default App;
//if aria-selectd is true then display task associated with that 
//conditionally render a card component of some sort