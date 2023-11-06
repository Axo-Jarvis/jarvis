import React, { useEffect, useState } from 'react';
import AuthPage from './AuthPage.jsx';
import Home from './home-page.jsx';


const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  // for Nancy
  const [username, setUsername] = useState(null);
  // const [username, setUsername] = useState("Nancy");

  const changeLogin = (username) => {
    setIsLogin(true);
    setUsername(username);
  };

  // For nancy
  // const changeUsername = (name) => {
  //   setUsername(name)
  // }

//   return (
//     <div>{isLogin ? <Home currentUser={userName}/> : <AuthPage changeLogin={changeLogin} />}</div>
//   );
// };

  return (
    <Home currentUser={username} />
  );
}

export default App;
