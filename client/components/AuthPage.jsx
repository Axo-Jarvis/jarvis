import React, { useState } from 'react';
import Login from './Login.jsx';
import SignUp from './Signup.jsx';

export default function AuthPage({ changeLogin }) {
  const [isSignup, setIsSignup] = useState(false);

  const changeSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div>
      {isSignup ? (
        <SignUp changeLogin={changeLogin} changeSignup={changeSignup} />
      ) : (
        <Login changeLogin={changeLogin} changeSignup={changeSignup} />
      )}
    </div>
  );
}
