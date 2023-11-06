import React, { useEffect, useState } from "react";
import AuthPage from "./AuthPage.jsx";
import Home from "./home-page.jsx";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);

  // for Nancy

  const changeLogin = (name) => {
    setIsLogin(true);
    setUsername(name);
  };

  return (
    <div>{isLogin ? <Home /> : <AuthPage changeLogin={changeLogin} />}</div>
  );
};
// return <Home />;
// };

export default App;
