import React, { useState } from 'react';
import TaskButton from './task-btn.jsx';
import Task from './task.jsx';

const NewTaskContainer = () => {
  const [newTaskInput, setNewTaskInput] = useState('');
  const [allNewTasks, setNewTasks] = useState([]);

  const addNewTask = task => {
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
    setNewTaskInput('');
  };

  const deleteTask = id => {
    setNewTasks(allNewTasks.filter(task => task.id !== id));
  };

  console.log(allNewTasks);

  return (
    <div className="task-container">
      <h1 className="new-task-title">Need To Complete</h1>

      <form className="task-input-field">
        <input
          type="text"
          className="create-task"
          placeholder="Create a task"
          onChange={e => setNewTaskInput(e.target.value)}
          value={newTaskInput}
        />
      </form>
      {allNewTasks.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            deleteTask={() => deleteTask(task.id)}
          />
        );
      })}
      <TaskButton type={addNewTask} input={newTaskInput} />
    </div>
  );
};

export default NewTaskContainer;
