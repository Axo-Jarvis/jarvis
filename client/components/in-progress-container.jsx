import React, { useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

const InProgress = ({inProgressTasks, updateTask, deleteTask, setInProgress, currentUsername}) => {
  const [progressInput, setProgressInput] = useState('');

/*  need to have buttons that move left or right to update task status
    clicking left will update task to new task
    clicking right will update task to completed
*/

  return (
    <div className='progress-container'>
      <h1 className='progress-title'>In Progress</h1>

      <form className='progress-input'>
        <input
          type='text'
          className='progress-input'
          placeholder='Create a task'
          onChange={(e) =>
            setProgressInput(e.target.value)}
          value={progressInput}
        />
      </form>
      {inProgressTasks.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            deleteTask={() => deleteTask(currentUsername, task.id)}
          />
        );
      })}
      {/* <TaskButton type={updateTask} input={progressInput} /> */}
    </div>
  );
};

export default InProgress;
