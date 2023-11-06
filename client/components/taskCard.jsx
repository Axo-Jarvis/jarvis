import React, { useState } from 'react';
import { format } from 'date-fns';
import '/styles/TaskCard.scss';

const initialTasks = {
    '11/04/2023': [
      {
        subject: 'Calendar',
        dueDate: '11/04/2023',
        member: 'Patrick',
        description: 'Calendar',
        status: 'In Progress',
      },
      {
        subject: 'TaskList',
        dueDate: '11/04/2023',
        member: 'Nancy',
        description: 'TaskList',
        status: 'In Progress',
      },
      {
        subject: 'DB',
        dueDate: '11/04/2023',
        member: 'Austin',
        description: 'DB',
        status: 'In Progress',
      },
      {
        subject: 'Auth',
        dueDate: '11/04/2023',
        member: 'Dana',
        description: 'Auth',
        status: 'In Progress',
      },
      {
        subject: 'Server',
        dueDate: '11/04/2023',
        member: 'Sung',
        description: 'Server',
        status: 'In Progress',
      },
    ],
    '11/05/2023': [
      {
        subject: 'Task 2',
        dueDate: '11/05/2023',
        member: 'Patrick',
        description: 'Task 2 description',
        status: 'Completed',
      },
    ],
    // Add more tasks for other dates as needed
  };
function TaskCard(props) {
    const selectedDate = format(props.selectedDate, 'MM/dd/yyyy'); // Format the date to 'MM/DD/YYYY'
    const tasksForDate = initialTasks[selectedDate] || [];
  
    console.log('Selected Date:', selectedDate);
    console.log('Tasks for Date:', tasksForDate);

  return (
    <div>
      {tasksForDate.map((task, index) => (
        <div className="taskCard" key={index}>
          <h1 className="subject">{task.subject}</h1>
          <div className="Due Date">Due Date: {selectedDate}</div>
          <div className="member-assigned">Members: {task.member}</div>
          <div className="description">Description: {task.description}</div>
          <div className="status">Status: {task.status}</div>
        </div>
      ))}
    </div>
  );
}
export default TaskCard;
