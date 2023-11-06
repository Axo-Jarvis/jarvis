import React from 'react';
import NewTaskContainer from './need-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';
import StatusBar from './StatusBar.jsx';
import PieChart from './PieChart.jsx';
import ButtonAppBar from './Nav.jsx';

const Home = () => {
  return (
    <>
      <ButtonAppBar />
      <div className="home-container">
        <NewTaskContainer />
        <InProgress />
        <Completed />
      </div>
      <StatusBar />
      <PieChart />
    </>
  );
};

export default Home;
