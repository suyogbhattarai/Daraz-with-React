import React from 'react'
import "./loginform.scss"
import { Link } from 'react-router-dom'

function Loginform() {
  return (
    <div className="cont">
    <header className='d-flex justify-content-between'>
        <h4 className='pt-3'>Welcome to Daraz! Please login first.</h4>
        <p className='pt-3' style={{fontSize:13}}>New member? <Link>Register</Link> here</p>
    </header>
    <div className="card p-3 mt-5 ">
      <div className="row g-5">
      <div className='col-lg-6'>
        <div>
      <p className='text-secondary' style={{fontSize:13}}>Phone Number or Email*</p>
      <div className="d-flex gap-5 justify-content-start ">
      <input className='py-2 text-secondary p-3 ' style={{display:"flex",width:450,opacity:0.9}} type="text" placeholder='Please enter your Phone Number or Email'/>
   
      </div>
      </div>
      <div>
      <p className='mt-4 text-secondary' style={{fontSize:13}}>Password*</p>
      <div className="d-flex gap-5 justify-content-start">
      <input className='py-2 p-3' style={{display:"flex",width:450,opacity:0.9}} type="text" placeholder='Please enter your Phone Number or Email'/>
      </div>
      <p className='text-primary pt-2' style={{fontSize:13,textAlign:"end",}}>Reset your Password</p>
      </div>
      </div>
      <div className="col-lg-6 pt-4">
      <button type="button" class="login-btn">LOGIN</button>
      <p className='text-secondary py-2' style={{fontSize:13}}>or,login with</p>
      <button type="button" class="f-btn d-flex gap-3 text-center"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></button>
      <button type="button" class="g-btn d-flex gap-3"><i class="fa fa-google-plus" aria-hidden="true"></i><span>Google</span></button>


      </div>
   
      </div>

      
    
     
    </div>
    <div className="login-box p-4">

    </div>
    </div>
    

  )
}

export default Loginform