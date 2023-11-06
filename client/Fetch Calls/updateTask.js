const task_id = 100; // must exist in db
const taskStatus = 'changed'; // required
const finish_date = new Date(); // optional

const updateTask = async (task_id, taskStatus, finish_date) => {
  try {
    // currently running in node, on the browser it would just be '/api/updateTask'
    const url = `http://localhost:3000/api/updateTask`;

    const updatedTask = {
      task_id: task_id,
      status: taskStatus,
      finish_date: finish_date,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Task Updated!');
      console.log(result);
      return result;
    } else {
      console.error('Server response not OK:', response.status);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

export default updateTask;
