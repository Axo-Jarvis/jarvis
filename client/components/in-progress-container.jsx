import React, { useEffect, useState } from 'react';
import TaskList from './task-btn.jsx';
import Task from './task.jsx';

const InProgress = () => {
  const [inProgress, setInProgress] = useState([]);

  const addProgressTask = (task) => {
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
  };

  return (
    <div className='progress-container'>
      <h1 className='progress-title'>In Progress</h1>
      <TaskList addProgressTask={addProgressTask} />
      {inProgress.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            deleteTask={() => deleteTask(task.id)}
          />
        );
      })}
    </div>
  );
};

export default InProgress;
