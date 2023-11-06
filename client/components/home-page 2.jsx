import React, { useState, useEffect } from 'react';
import NewTaskContainer from './new-task-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';
<<<<<<< HEAD
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

=======
import getTasks from '../Fetch Calls/getTasks.js';

const Home = ({ currentUser }) => {
  const [newTasks, setNewTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const makeNewTasks = task => {
    console.log('typeof newTasks before', typeof newTasks);
    setNewTasks(task);
    console.log('typeof newTasks after', typeof newTasks);
  };

  const makeInProgressTask = task => {
    setInProgressTasks(task);
  };

  const makeCompletedTask = task => {
    setCompletedTasks(task);
  };

  /*  here we make an async call to server to fetch ALL tasks
  after we receive ALl tasks, we update the respective states
  
*/
  useEffect(() => {
    async function fetchTasks() {
      const result = await getTasks(currentUser);
      setNewTasks(result.tasks);
    }

    fetchTasks();
  }, [currentUser]);

  const deleteTask =
    ((currentUser, id) => {
      const deleteTaskRequest = async () => {
        try {
          const deleteTaskResponse = await fetch(`api/deleteTask/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },

            //need to know what the delete task request looks like

            body: JSON.stringify({
              username: currentUser,
            }),
          });

          // ** CODE TO DO
          // ask backend to send response back JUST the tasks with the same status as the task before it was deleted

          if (deleteTaskResponse.ok) {
            const result = await deleteTaskResponse.json();
            console.log('Success in deleting a request!');

            // after receiving task that has same status as the one that was just delted
            // update the state of that respective status
          }
        } catch (error) {
          console.log('Network error:', error);
        }
      };

      deleteTaskRequest();
    },
    []);
  // ^ is this intended to be useEffect with , [] -- same with updateTask below ?

  const updateTask =
    ((currentUser, id, status) => {
      const updateTaskRequest = async () => {
        try {
          const updateTaskResponse = await fetch(`api/updateTask/${id}`, {
            // 'PUT' request?
            method: 'UPDATE',
            headers: {
              'Content-Type': 'application/json',
            },

            //need to know what the delete task request looks like ??

            body: JSON.stringify({
              username: currentUser,
              status: status,
            }),
          });

          /*        ** CODE TO DO
        ask to send back - the current status, and the newly updated status
        eg: we want to move new task to in progress
        we need server to send back new task data and in progress data so we can update states accordingly
*/
          if (updateTaskResponse.ok) {
            const result = await updateTaskResponse.json();
            console.log('Success in updating!');

            // update state based on which status
          }
        } catch (error) {
          console.log('Network error:', error);
        }
      };
      updateTaskRequest();
    },
    []);

  // want to pass all the tasks
  return (
    <div className="task-columns">
      <NewTaskContainer
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        makeNewTask={makeNewTasks}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
        setNewTasks={setNewTasks}
      />
      <InProgress
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        makeInProgressTask={makeInProgressTask}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
      <Completed
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        makeCompletedTask={makeCompletedTask}
        completedTasks={completedTasks}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

>>>>>>> dev-branch
export default Home;
