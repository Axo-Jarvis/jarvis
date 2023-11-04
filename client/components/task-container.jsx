import React, { useEffect, useState } from 'react';
import TaskList from './task-list.jsx';

const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState([])

  const addTask = (task) => {
    setAllTasks([...allTasks, {key: crypto.randomUUID(), task: task, completed: false, inProgress: false}])
    console.log(allTasks)
  }

  return (
    <div className='task-list-container'>
      <TaskList addTask={addTask}/>
    </div>
  );
};

export default TaskContainer;