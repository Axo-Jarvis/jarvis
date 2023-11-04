import React, { useEffect, useState } from 'react';
import '/styles/TaskList.scss';

function TaskList(){
    return (
    <div className='TaskList'>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
    </div>
    )
}
export default TaskList;