import React, { useEffect, useState } from 'react';
import Login from './Login.jsx';
import AuthPage from './AuthPage.jsx';
// import Nancy from Nancy

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  // for Nancy
  // const [username, setUsername] = useState(null);

  const changeLogin = () => {
    setIsLogin(true);
  };

  // For nancy
  // const changeUsername = (name) => {
  //   setUsername(name)
  // }

  return (
    <div>{isLogin ? 'NANCY' : <AuthPage changeLogin={changeLogin} />}</div>
  );
};

export default App;
