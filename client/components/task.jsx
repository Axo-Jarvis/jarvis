import React, { useEffect, useState } from 'react';

const Task = ({task, deleteTask}) => {
  const [taskState, setTaskState] = useState([]);


  return (
    <div className='task-item'>
      <p>{task.task}</p>
      <button className='delete-task' onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}



export default Task;