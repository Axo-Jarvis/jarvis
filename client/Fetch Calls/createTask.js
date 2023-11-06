const task_id = 119; // must be unique
const username = 'test20'; // must exist in db
const subject = 'test';
const taskStatus = 'test';
const created_date = new Date();

const createTask = async (
  task_id,
  username,
  subject,
  taskStatus,
  created_date
) => {
  try {
    // currently running in node, on the browser it would just be '/api/createTask'
    const url = `http://localhost:3000/api/createTask`;

    const newTask = {
      task_id: task_id,
      username: username,
      subject: subject,
      status: taskStatus,
      created_date: created_date,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Created Task!');
      console.log(result);
      return result;
    } else {
      console.error('Server response not OK:', response);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

createTask(task_id, username, subject, taskStatus, created_date);

export default createTask;
