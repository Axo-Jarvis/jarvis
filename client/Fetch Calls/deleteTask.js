const task_id = 100; // must exist in db

const deleteTask = async () => {
  try {
    // currently running in node, on the browser it would just be '/api/deleteTask'
    const url = `http://localhost:3000/api/deleteTask`;

    const taskToDelete = {
      task_id: task_id,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskToDelete),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Deleted Task!');
      console.log(result);
    } else {
      console.error('Server response not OK:', response.status);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

deleteTask();
