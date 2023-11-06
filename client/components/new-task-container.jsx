import React, { useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

// does this need to accept 'setNewTasks' for line 29?
const NewTaskContainer = ({newTasks, deleteTask, currentUser}) => {
  const [newTaskInput, setNewTaskInput] = useState('');
 
  // create a useEffect that will make a get api request on load which will pull all the newt asks that have a status of new and update the alln new tasks state
  const handleSubmit = async (e) => {
    try {
      const createTaskResponse = await fetch('api/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: newTaskInput,
          status: 'new',
          // username: currentUser below?
          username: curUsername,
        }),
      });

      if (createTaskResponse.ok) {
        const result = await createTaskResponse.json();
        console.log('Success in creating task!');
        // update task with result from creating task response
        setNewTasks(result);
      }
    } catch (error) {
      console.log('Network error:', error);
    }
  };

  //this is ONLY if create task is in new task container and not being passed down from home page
  const createTask = (currentUser => {
    const createTask = async () => {
      try {
        const createTaskResponse = await fetch(`api/createTask`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          //need to know what the delete task request looks like ??
          body: JSON.stringify({
            username: currentUser,
            subject: newTaskInput,
            status: '',
          }),
        });

        if (createTaskResponse.ok) {
          const result = await createTaskResponse.json();
          console.log('Success in create task!');
          // find out what the response is from the create task response. - need to know if getting back just the ENTIRE object - of new / inProgress / completed or just the SPECIFIC array
          
          /*
          {
            message: 'Task Created!',
            task: {
              id: key:randomUUID() ,
              task_id: '202,
              subject: 'grocery shopping',
              status: 'need to complete',
              created_date: ,
              finish_date: null,
              username: ,
            }
          }

          */


        }
      } catch (error) {
        console.log('Network error:', error);
      }
    };

    // is this deleteTask prop? below
    deleteTaskRequest();
  },[]);

// need to code a button that calls update task and moves a ticket to inprogress

return (
  <div className='new-task-container'>
    <h1 className='new-task-title'>Need To Complete</h1>

    <form className='new-task-input'>
      <input
        type='text'
        className='new-task-input'
        placeholder='Create a task'
        onChange={(e) => setNewTaskInput(e.target.value)}
        value={newTaskInput}
      />
    </form>
    {/* below: are we mapping over newTasks prop? */}
    {allNewTasks.map((task, index) => {
      return (
        <Task
          task={task}
          key={index}
          deleteTask={() => deleteTask(currentUser, task.id)}
          onSubmit={handleSubmit}
        />
      );
    })}
    <TaskButton type={addNewTask} input={newTaskInput}/>
    {/* what is addNewTask above? */}
  </div>
);
};

export default NewTaskContainer;