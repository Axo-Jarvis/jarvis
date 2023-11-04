import React, { useEffect, useState } from 'react';
import NewTaskContainer from './need-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const App = () => {
  return (<div>Hello
  <NewTaskContainer />
  <InProgress />
  <Completed />
  </div>
  );
};

export default App;

