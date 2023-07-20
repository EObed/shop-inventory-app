import React from 'react'

const ToDoRow = ({task, handleDeleteclick}) => {
  return (
    
        <div className='to-do-row-task'>{task.taskName}
        <button className='delete-btn' type='button' onClick={()=>handleDeleteclick(task.id)}>Completed</button>
        </div>

  )
}

export default ToDoRow