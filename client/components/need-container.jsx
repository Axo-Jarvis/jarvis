import React, { useEffect, useState } from 'react';
import TaskList from './task-btn.jsx';
import Task from './task.jsx';

const NewTaskContainer = () => {
  const [allNewTasks, setNewTasks] = useState([]);


  const addNewTask = (task) => {
    setNewTasks([
      ...allNewTasks,
      {
        id: crypto.randomUUID(),
        task: task,
        completed: false,
        inProgress: false,
      },
    ]);
    console.log(allNewTasks);
  };

  const deleteTask = id => {
    setNewTasks(allNewTasks.filter(task => task.id !== id))
  }

console.log(allNewTasks)
  return (
    <div>
    <div className="need-container">
        <h1 className='need-title'>Need To Complete</h1>
      <TaskList addNewTask={addNewTask} />
      {allNewTasks.map((task, index) => {
        return <Task task={task} key={index} deleteTask={() => deleteTask(task.id)}/>;
      })}
    </div>
    </div>
  );
};

export default NewTaskContainer;