import React, { useState, useEffect } from 'react';
import NewTaskContainer from './new-task-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';
import StatusBar from './StatusBar.jsx';
import PieChart from './PieChart.jsx';
import ButtonAppBar from './Nav.jsx';

const Home = () => {
  return (
    <div>
      <NewTaskContainer />
      <InProgress />
      <Completed />
    </div>
  );
};

export default Home;
