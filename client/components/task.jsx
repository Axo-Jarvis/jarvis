import React, { useState } from 'react';

const Task = ({task, deleteTask}) => {

  // on task you add a button that will make a fetch request
  // make a radio input - new, in progress, completed

  // 
  const [status, setStatus] = useState('new');

{/* <Button onClick={async () => {await this.asyncFunc("Example");} }/>

async asyncFunc(text) {
    console.log(text);
} */}

const changeStatus = async(status) => {
  try {
    const response = await fetch(`api/updateTask/${id}`, {
      // 'PUT' ?
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: newTaskInput,
        status: status,
        username: curUsername,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      console.log('Success!');
    }
  } catch (error) {
    console.log('Network error:', error);
  }  
}

return (
  <div className='task-item'>
    <p>{task.task}</p>
    <button className='set-new' onClick={() => setStatus('new')}>New Task</button>
    <button className='set-in-progress' onClick={() => setStatus('inprogress')}>In Progress</button>
    <button className='set-completed' onClick={() => setStatus('completed')}>Completed</button>

    <button className='change-status' onClick={ async () => await changeStatus(status)}>New Task</button>
    <button className='delete-task' onClick={() => deleteTask(task.id)}>Delete</button>
  </div>
);

}





export default Task;