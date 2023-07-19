import React from 'react'

const ToDoRow = ({task}) => {
  return (
    <tr>
        <td>{task.taskName}</td>
    </tr>
  )
}

export default ToDoRow