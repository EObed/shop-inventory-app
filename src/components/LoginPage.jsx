import React from 'react'
import "./LoginPage.css"
import { useState } from 'react'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { Link } from 'react-router-dom'



function LoginPage() {

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eye)

  const handleToggle =()=>{
    if (type==='password'){
      setIcon(eyeOff)
      setType('text')
    } else{
      setIcon(eye)
      setType('password')
    }
  }

  return (
    <div className='main'>
        <div className='sub-main'>
            <div className='person-icon'>
            <i class="fa fa-user fa-8x" aria-hidden="true"></i>
            </div>
            <div className='details-section'>
              <div className='email-box'>
              <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <input type="text" placeholder='E-mail' className='mail' required></input>
              </div>
              <div className='password-box'>
              <i class="fa-solid fa-lock fa-2x"></i>
              <span onClick={handleToggle} className='eye-icon'><Icon icon={icon} size={25}/></span>
              <input type={type} placeholder='Password' className='pass' required ></input>
              </div>
            </div>
            <div className='bottom-section'>
              <div><button>Log In</button></div>
              <div><button className='fpass'>Forgot Password</button>/<button><Link to="/signup">Sign Up</Link></button></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage