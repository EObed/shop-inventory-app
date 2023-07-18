import React from 'react'
import { Link } from 'react-router-dom'
import "./protected.css"
function ProtectedRoute() {
  return (
    
    <div className="day">
    <div className='sidebar1'>
        <h1>MyShop App</h1>
        <ul>
            <li><Link to="/page2">MyShop Inventory</Link></li>
            <li><Link>MyShop To-Do List</Link></li>
            <li><Link>MyShop Budget Tracker</Link></li>
        </ul>
    </div>
    </div>
   
    
  )
}

export default ProtectedRoute