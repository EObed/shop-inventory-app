import React, { useState } from 'react'
import "./ToDoPage.css"
import { Link } from "react-router-dom";
import { nanoid } from '@reduxjs/toolkit';
import ToDoRow from './ToDoRow';
import data from "./todo-data.json"

const ToDoPage = () => {
    document.body.style = 'background: aliceblue;'; 

    const [tasks, setTasks] = useState(data)

    const [addformData, setAddFormData] = useState(
        {taskName: ''}
    )

    const handleAddFormSunmit = (event) =>{
        event.preventDefault()

        const newTask = {
            id: nanoid(),
            taskName: addformData.taskName
        }

        const newTaskArray = [...tasks, newTask]

        setTasks(newTaskArray)
    }

    const handleAddToForm=(event)=>{
        event.preventDefault()

        const inputName = event.target.getAttribute('name')
        const inputValue = event.target.value

        const newformData = {...addformData}
        newformData[inputName]=inputValue

        setAddFormData(newformData)
    }

    const handleDeleteclick = (taskId) => {
        const newTaskArray = [...tasks]

        const index = tasks.findIndex((task)=>task.id === taskId)

        newTaskArray.splice(index, 1)

        setTasks(newTaskArray)
    }


  return (
    
    <div className='to-do-page'>
        <div className='todo-title'><h2>MyShop App</h2></div>
        <div className='to-do-body'>
            <div className='to-do-sidebar'>
            <ul>
                        <li><Link to="/page2">MyShop Inventory</Link></li>
                        <li>
                            MyShop To-Do List
                        </li>
                        <li>
                            <Link>MyShop Budget Tracker</Link>
                        </li>
                    </ul>
            </div>
            <div className='to-do-list'>
                <div className='to-do-body-header'><h3>MyShop To-Do List</h3></div>
                <div className='to-do-b'>
                    <form className='to-do-form' onSubmit={handleAddFormSunmit}>
                        <input type='text' className='to-do-input' placeholder='Enter task' name='taskName' onChange={handleAddToForm}></input>
                        <button type='submit' className='to-do-btn'>Add Task</button>                        
                    </form>
                    <div className='to-do-form1'>
                        <div>
                            {tasks.map((task)=>(
                                <ToDoRow task={task} handleDeleteclick={handleDeleteclick}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ToDoPage