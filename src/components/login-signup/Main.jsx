import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Main = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="main-container">
      {isSignup ? (
        <Signup onSwitch={handleSwitch} />
      ) : (
        <Login onSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default Main;
