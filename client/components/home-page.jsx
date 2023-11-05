import React from 'react';
import NewTaskContainer from './need-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';

const Home = () => {
    return (
        <div>
            <NewTaskContainer />
            <InProgress />
            <Completed />
        </div>
    );
}

export default Home;