import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import LoginForm from '../components/Loginform'

function Login() {
  return (
    <>
    <div className="container">
    <header className='d-flex justify-content-between'>
        <h4>Welcome to Daraz! Please login.</h4>
        <p style={{fontSize:13}}>New member? <Link>Register</Link> here</p>
    </header>
    <div className="card">
      <> <LoginForm/></>
     
    </div>
    <div className="login-box p-4">

    </div>
    </div>
    



    </>
  )
}

export default Login