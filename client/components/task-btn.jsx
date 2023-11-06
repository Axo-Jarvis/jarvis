import React, { useEffect, useState } from 'react';


const TaskButton = ({clickHandler, input}) => {
  // return (
  //     <button type='submit' className='task-btn' onClick={() => clickHandler(input)}>
  //       Add Task
  //     </button>
  // );
  return (
      <button type='submit' className='task-btn' onClick={clickHandler}>
        Add Task
      </button>
  );
};

export default TaskButton;