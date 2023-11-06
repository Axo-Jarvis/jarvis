import React, { useEffect, useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

const Completed = () => {
  const [completedInput, setCompletedInput] = useState('');

// need to have button that moves task to the left (in progress)

  console.log(completed)

  return (
    <div className='complete-container'>
      <h1 className='complete-title'>Completed</h1>

      <form className='completed-input'>
        <input
          type='text'
          className='completed-input'
          placeholder='Create a task'
          onChange={(e) =>
            setCompletedInput(e.target.value)}
          value={completedInput}
        />
      </form>
      {completed.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            deleteTask={() => deleteTask(task.id)}
          />
        );
      })}
      <TaskButton type={addCompletedTask} input={completedInput} />
    </div>
  );
};

export default Completed;
