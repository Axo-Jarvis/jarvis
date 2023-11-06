import React, { useState } from 'react';

import NewTaskContainer from './new-task-container.jsx';
import InProgress from './in-progress-container.jsx';
import Completed from './completed-container.jsx';

const Home = ({ currentUser }) => {
  const [newTasks, setNewTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

/*  here we make an async call to server to fetch ALL tasks
  after we receive ALl tasks, we update the respective states
  
  test:   const allTasksResponse = await fetch(
          'https://pokeapi.co/api/v2/pokemon/clefairy',
          {
            method: 'GET',
          })
*/
  useEffect(() => {
    const fetchAllTask = async () => {
      try {
        const allTasksResponse = await fetch(`api/getTasks/${currentUser}`, {
            method: 'GET',
        });

        if (allTasksResponse.ok) {
          const result = await allTasksResponse.json();
          console.log('Success in all tasks request!');
          
          // need to figure out what the response from the server from the GET for all tasks look like
          // set the appropriate states

          /*
          id:
          task_id:
          subject:
          status:
          created_date:
          finished_date:
          username:
          */

/*        
          // set state - targeting status
          setNewTasks()
          setInProgressTasks()
          setCompletedTasks()
*/

          // need length of the newTasks, inProgressTasks, completedTasks arrays to render the charts

        }
        // might need to throw error here for catch(??)
      } catch (error) {
        console.log('Network error:', error);
      }
    };

    fetchAllTask();
  }, []);

  const deleteTask = ((currentUser, id) => {
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

const updateTask = ((currentUser, id, status) => {
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
    // is this typo?? meaning to call updateTaskRequest here??
    deleteTaskRequest();
  },
[]);

  // want to pass all the tasks
  return (
    <div className="task-columns">
      <NewTaskContainer
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        setNewTasks={setNewTasks}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
      <InProgress
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        setInProgressTasks={setInProgressTasks}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
      <Completed
        newTasks={newTasks}
        inProgressTasks={inProgressTasks}
        setCompletedTasks={setCompletedTasks}
        currentUser={currentUser}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default Home;
