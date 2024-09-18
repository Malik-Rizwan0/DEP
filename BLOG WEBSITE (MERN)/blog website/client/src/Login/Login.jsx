import React from 'react'
import './Login.css'
// import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">
            LOGIN
        </span>
      <form className="loginForm">
        <label >Email</label>
        <input type="text" className='loginInput' placeholder='Enter Your Email...' />
        <label >Password</label>
        <input type="password" className='loginInput' placeholder='Enter Your Password...' />
        <button className='loginButton'>LOGIN</button>
      </form>
      <button className="loginRegisterButton"><Link className='link' to='/register'>Sign Up</Link></button>
    </div>
  )
}
import './Login.css'
import { Link } from 'react-router-dom'
export default Login
