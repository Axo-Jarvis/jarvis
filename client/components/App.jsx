import React, { createContext, useEffect, useState, useContext } from 'react';
import BasicDateCalendar, * as calendar from './calendar.jsx';
import { createRoot } from 'react-dom/client';
import TaskCard from './taskCard.jsx';
import TaskList from './TaskList.jsx';
import AuthPage from './AuthPage.jsx';
import Home from './home-page.jsx';
import '/styles/container.scss';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const changeLogin = username => {
    setIsLogin(true);
    setUsername(username);
  };

  // For nancy
  // const changeUsername = (name) => {
  //   setUsername(name)
  // }

  //   return (
  //     <div>{isLogin ? <Home /> : <AuthPage changeLogin={changeLogin} />}</div>
  //   );
  // };
  return <Home />;
};

export default App;
