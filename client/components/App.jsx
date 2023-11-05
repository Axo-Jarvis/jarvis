import React, { useEffect, useState } from 'react';
import AuthPage from './AuthPage.jsx';
import Home from './home-page.jsx';

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

//   return (
//     <div>{isLogin ? <Home /> : <AuthPage changeLogin={changeLogin} />}</div>
//   );
// };

  return (
    <Home />
  );
}

export default App;
