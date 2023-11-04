import React, { useEffect, useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

const Completed = () => {
  const [completedInput, setCompletedInput] = useState('');
  const [completed, setCompleted] = useState([]);

  // prevent page reloading everytime you hit submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // add the task to the whole task list
    completedInput(completedInput);
    
    // reset the input field to empty after submitting
    setCompletedInput('');
  };

  const handleChange = (e) => {
    setCompletedInput(e.target.value);
  };

  const addCompletedTask = (task) => {
    setCompleted([
      ...completed,
      {
        id: crypto.randomUUID(),
        task: task,
        completed: true,
        inProgress: false,
      },
    ]);
    console.log(completed);
  };

  return (
    <div className='complete-container'>
      <h1 className='complete-title'>Completed</h1>

      <form className='completed-input'>
        <input
          type='text'
          className='completed-input'
          placeholder='Create a task'
          onChange={handleChange}
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
      <TaskButton handleClick={handleSubmit} addCompletedTask={addCompletedTask} />
    </div>
  );
};

export default Completed;
