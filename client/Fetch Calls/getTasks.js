const username = 'test20'; // must exist in db

const getTasks = async () => {
  try {
    // currently running in node, on the browser it would just be '/api/getTasks?username=${username}'
    const url = `http://localhost:3000/api/getTasks?username=${username}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Got Tasks!');
      console.log(result);
    } else {
      console.error('Server response not OK:', response);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

getTasks();