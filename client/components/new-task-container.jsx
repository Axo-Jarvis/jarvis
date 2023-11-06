import React, { useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';
import createTask from '../Fetch Calls/createTask.js';
import deleteTaskApi from '../Fetch Calls/deleteTask.js';

const NewTaskContainer = ({
  newTasks,
  setNewTasks,
  makeNewTask,
  deleteTask,
  currentUser,
}) => {
  const [newTaskInput, setNewTaskInput] = useState('');
  // create a useEffect that will make a get api request on load which will pull all the new asks that have a status of new and update the alln new tasks state
  const handleSubmit = async event => {
    event.preventDefault();

    const task_id = crypto.randomUUID();
    const subject = newTaskInput;
    const taskStatus = 'Need To Complete';
    const username = currentUser;
    const created_date = new Date();

    const result = await createTask(
      task_id,
      username,
      subject,
      taskStatus,
      created_date
    );
    console.log('Task created:', result);

    setNewTasks([...newTasks, result.task]);
  };

  const deleteTaskAction = async task_id => {
    deleteTaskApi(task_id);
    const updatedTasks = newTasks.filter(task => task.task_id !== task_id);
    setNewTasks(updatedTasks);
  };

  return (
    <div className="new-task-container">
      <h1 className="new-task-title">Need To Complete</h1>

      <form className="new-task-input">
        <input
          type="text"
          className="new-task-input"
          placeholder="Create a task"
          onChange={e => setNewTaskInput(e.target.value)}
          value={newTaskInput}
        />
      </form>
      {newTasks.map((task, index) => {
        return (
          <Task
            task={task.subject}
            key={index}
            deleteTaskAction={() => deleteTaskAction(task.task_id)}
            onSubmit={handleSubmit}
          />
        );
      })}
      {/* <TaskButton clickHandler={makeNewTask} input={newTaskInput}/> */}
      <TaskButton clickHandler={handleSubmit} />
    </div>
  );
};

export default NewTaskContainer;
