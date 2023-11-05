import * as React from 'react';
import '/styles/TaskCard.scss';
function TaskCard(selected){
    return(
        <div className="taskCard">
            <h1 className="subject">test subject</h1>
            <div className="member-assigned">Members: Patrick</div>
            <div className="description">Description: test card</div>
            <div className='status'>Status: In Progress</div>
        </div>
        )
    }
}
export default TaskCard;