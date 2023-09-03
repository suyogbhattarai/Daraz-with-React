import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="container">
    <header className=''>
        <h4>Welcome to Daraz! Please login.</h4>
        <p style={{fontSize:13}}>New member? <Link>Register</Link> here</p>
    </header>
    <div className="login-box p-4">

    </div>
    </div>
    



    </>
  )
}

export default Login