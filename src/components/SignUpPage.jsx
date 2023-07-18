import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./SignUpPage.css"
import { useDispatch } from 'react-redux'

const SignUpPage = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [bizzname, setBizzname] = useState('')
    const [usermail, setUsermail] = useState('')
    const [userpass, setUserpass] = useState('')

    const dispatch = useDispatch()

    const register = () => {
        dispatch({
            type : "REGISTER",
            payload : {
                id : (new Date).getTime(),
                firstname, lastname, bizzname, usermail, userpass
            }
        })
    }

  return (
    <div className='sPage'>
        <div className='subPage'>
            <div className='head'>
                <h1>Register Your Business With Us</h1>
            </div>
            <div className='regForm'>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value={firstname} onChange={e => setFirstname(e.target.value)}/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value={lastname} onChange={e => setLastname(e.target.value)}/><br/>
                    <label for="bizz">Name of business:</label><br/>
                    <input type="text" id="bizz" name="bizz" value={bizzname} onChange={e => setBizzname(e.target.value)}/><br/>
                    <label for="mail">E-mail:</label><br/>
                    <input type="text" id="mail" name="mail" value={usermail} onChange={e => setUsermail(e.target.value)} /><br/>
                    <label for="pass">Password:</label><br/>
                    <input type="password" id="pass" name="pass" value={userpass} onChange={e => setUserpass(e.target.value)} required /><br/>
                </form>
            <div className='sign-but'><button onClick={register}><Link to="/protectedPage">Sign Up</Link></button></div>
            </div>
            <div className='bottom'>
                <p>Already registered? <button><Link to="/login">Log In</Link></button></p>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage