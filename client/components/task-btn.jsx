import React, { useEffect, useState } from 'react';

const TaskButton = ({ type, input }) => {
  return (
    <button type="submit" className="task-btn" onClick={() => type(input)}>
      Add Task
    </button>
  );
};

export default TaskButton;
