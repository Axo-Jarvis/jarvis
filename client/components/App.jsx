import React, { useEffect, useState } from 'react';
import AuthPage from './AuthPage.jsx';
import Home from './home-page.jsx';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);

  const changeLogin = username => {
    setIsLogin(true);
    setUsername(username);
  };

  //   return (
  //     <div>{isLogin ? <Home currentUser={userName}/> : <AuthPage changeLogin={changeLogin} />}</div>
  //   );
  // };

  return (
    // HARDCODED USERNAME
    <Home currentUser={'test20'} />
  );
};

export default App;
