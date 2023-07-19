import React, { useState } from 'react'
import "./ToDoPage.css"
import { Link } from "react-router-dom";

const ToDoPage = () => {
    document.body.style = 'background: aliceblue;'; 

    // const [value, setValue] = useState("")


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
                    <form className='to-do-form'>
                        <input type='text' className='to-do-input' placeholder='Enter task'></input>
                        <button type='submit' className='to-do-btn'>Add Task</button>                        
                    </form>
                    <div className='to-do-form1'></div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ToDoPage