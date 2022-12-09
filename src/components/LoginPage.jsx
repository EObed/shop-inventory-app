import React from 'react'
import "./LoginPage.css"
function LoginPage() {
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
              <div className='eye-icon'><i class="fa fa-eye fa-2x" aria-hidden="true"></i></div>
              <input type="text" placeholder='Password' className='pass' required ></input>
              </div>
            </div>
            <div className='bottom-section'>
              <div><button>Log In</button></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage