import React, { useEffect, useState } from 'react';


const TaskButton = ({handleClick}) => {
  return (
      <button type='submit' className='task-btn' onClick={handleClick}>
        Add Task
      </button>
  );
};

export default TaskButton;


/*
// mom component - calling the button
​
<AuthButton
type={'Sign Up'}
handleClick={handleSignupButton}
changeLogin={changeLogin}
changeUser={changeUser}
/>
​
// generic button component file
​
import React from 'react';
​
const AuthButton = ({ type, handleClick }) => {
  return <button onClick={handleClick}>{type}</button>;
};
​
export default AuthButton;
*/