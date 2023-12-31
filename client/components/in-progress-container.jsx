import React, { useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

const InProgress = () => {
  const [progressInput, setProgressInput] = useState('');
  const [inProgress, setInProgress] = useState([]);

  const addProgressTask = task => {
    setInProgress([
      ...inProgress,
      {
        id: crypto.randomUUID(),
        task: task,
        completed: false,
        inProgress: true,
      },
    ]);
    console.log(inProgress);
    setProgressInput('');
  };

  const deleteTask = id => {
    setInProgress(inProgress.filter(task => task.id !== id));
  };

  return (
    <div className="task-container">
      <h1 className="progress-title">In Progress</h1>

      <form className="task-input-field">
        <input
          type="text"
          className="create-task"
          placeholder="Create a task"
          onChange={e => setProgressInput(e.target.value)}
          value={progressInput}
        />
      </form>
      {inProgress.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            deleteTask={() => deleteTask(task.id)}
          />
        );
      })}
      <TaskButton input={progressInput} type={addProgressTask} />
    </div>
  );
};

export default InProgress;
