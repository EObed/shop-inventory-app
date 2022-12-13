import React from 'react'
import "./SignUpPage.css"
const SignUpPage = () => {
  return (
    <div className='sPage'>
        <div className='subPage'>
            <div className='head'>
                <h1>Register Your Business With Us</h1>
            </div>
            <div className='regForm'>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" /><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" /><br/>
                    <label for="bizz">Name of business:</label><br/>
                    <input type="text" id="bizz" name="bizz" /><br/>
                    <label for="mail">E-mail:</label><br/>
                    <input type="text" id="mail" name="mail" /><br/>
                    <label for="pass">Password:</label><br/>
                    <input type="text" id="pass" name="pass" /><br/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage