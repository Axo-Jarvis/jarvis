import React, { useEffect, useState } from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task-item">
      <p>{task.task}</p>
      <button className="task-btn delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
