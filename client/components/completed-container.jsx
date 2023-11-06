import React, { useEffect, useState } from "react";
import TaskButton from "./task-btn.jsx";
import Task from "./task.jsx";

const Completed = () => {
  const [completedInput, setCompletedInput] = useState("");
  const [completed, setCompleted] = useState([]);

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
    setCompletedInput("");
  };

  const deleteTask = (id) => {
    setCompleted(completed.filter((task) => task.id !== id));
  };
  console.log(completed);

  return (
    <div className="task-container">
      <h1 className="complete-title">Completed</h1>

      <form className="task-input-field">
        <input
          type="text"
          className="create-task"
          placeholder="Create a task"
          onChange={(e) => setCompletedInput(e.target.value)}
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
