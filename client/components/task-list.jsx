import React, { useEffect, useState } from 'react';


const TaskList = ({addTask}) => {
  const [taskInput, setTaskInput] = useState('');

  // prevent page reloading everytime you hit submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput);
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <form className='task-list' onSubmit={handleSubmit}>
      <input
        type='text'
        className='task-input'
        placeholder='Create a task'
        onChange={handleChange}
      />
      <button type='submit' className='task-btn'>
        Add Task
      </button>
    </form>
  );
};

export default TaskList;
