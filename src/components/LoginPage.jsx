import React from 'react'
import "./LoginPage.css"
import { useState } from 'react'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { Link,Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



//  export const  Login = () => {
//   const [usermail, setUsermail] = useState('')
//   const [userpass, setUserpass] = useState('')
//   const dispatch = useDispatch()
//   const users = useSelector(state => state.users)


// const Login = () => {
//   const [type, setType] = useState('password')
//   const [icon, setIcon] = useState(eyeOff)

//     const payload = users.find(user => user.usermail === usermail && user.userpass === userpass)
//     if(payload){
//       dispatch({
//         type : 'LOGIN',
//         payload
//       })
//     }else{
//       alert("Wrong Credentials")
//     }
//     // const handleToggle =()=>{
//     //   if (type==='password'){
//     //     setIcon(eye)
//     //     setType('text')
//     //   } else{
//     //     setIcon(eyeOff)
//     //     setType('password')
//     //   }
//     // }
  
//     return (
//       <div></div>
//     )}}
//     //   <div className='main'>
//     //       <div className='sub-main'>
//     //           <div className='person-icon'>
//     //           <i class="fa fa-user fa-8x" aria-hidden="true"></i>
//     //           </div>
//     //           <div className='details-section'>
//     //             <div className='email-box'>
//     //             <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
//     //             <input type="text" id="mail" name="mail" value={usermail} onChange={e => setUsermail(e.target.value)}/>
//     //             </div>
//     //             <div className='password-box'>
//     //             <i class="fa-solid fa-lock fa-2x"></i>
//     //             <span onClick={handleToggle} className='eye-icon'><Icon icon={icon} size={25}/></span>
//     //             <input type="password" id="pass" name="pass" value={userpass} onChange={e => setUserpass(e.target.value)}/>
//     //             </div>
//     //           </div>
//     //           <div className='bottom-section'>
//     //             <div><button onClick={Login}>Log In</button></div>
//     //             <div><button className='fpass'>Forgot Password</button>/<button><Link to="/signup">Sign Up</Link></button></div>
//     //           </div>
//     //       </div>
//     //   </div>
     



export const LoginPage = () => {

    const [usermail, setUsermail] = useState('')
    const [userpass, setUserpass] = useState('')
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const login = () =>{
      
      const payload = users.find(user => user.usermail === usermail && user.userpass === userpass)

      if(payload){
        dispatch({
          type : 'LOGIN',
          payload
        }
        );Navigate("/protectedPage")
      }else{
        alert('Wrong Credentials')
      }
    }

  return (
    <form className='login'>
      <input type="text" id="mail" name="mail" value={usermail} onChange={e => setUsermail(e.target.value)}/>
      <input type="password" id="pass" name="pass" value={userpass} onChange={e => setUserpass(e.target.value)}/>
      <input type="button" value="Login" onClick={login}/>
      
    </form>
  )
}
