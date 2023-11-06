import React, { createContext, useEffect, useState, useContext } from 'react';
import BasicDateCalendar, * as calendar from './calendar.jsx';
import { createRoot } from 'react-dom/client';
import TaskCard from './taskCard.jsx';
import TaskList from './TaskList.jsx';
import AuthPage from './AuthPage.jsx';
import Home from './home-page.jsx';
import '/styles/container.scss';

const App = () => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const changeLogin = username => {
    setIsLogin(true);
    setUsername(username);
  };
  return (
    <div className='container'>
          <Home currentUser={'test20'} />
    <BasicDateCalendar onDateChange={handleDateChange} />
    <TaskList selectedDate={selectedDate}/> <br/>
    <TaskCard selectedDate={selectedDate}/><br/>
  </div>
  )
};
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
export default App;