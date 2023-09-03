import React, { useState } from 'react'
import "./header.scss"
import { Routes,Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login';

import Details from '../pages/Details';
import Category from '../pages/Category';


function Header() {


 
  const[isHidden,setIsHiden]=useState(true);
  const toogleVisibility=()=>{
    setIsHiden((a)=>!a)
  }
  return (
    <header>
    
    {isHidden  &&( <div className="banner-top" >
      <div className="container">
      <img  src="https://icms-image.slatic.net/images/ims-web/1905da4d-0b98-451f-b09f-e6e18b0f1ff4.png" alt="" />
      <button className='close'  onClick={toogleVisibility}>
      <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      </div>
    </div>)}
   
     <div className="header">
      <div className="container ">
        <div className="top">
          <div className="d-flex justify-content-between">

            <nav>
              <ul className='d-flex gap-4 '>
                <li><Link to="https://sellercenter.daraz.com.np/v2/seller/login?spm=a2a0e.11779170.header.d2.287d2d2b4ZdYxs&regist=truehttps://sellercenter.daraz.com.np/v2/seller/login?spm=a2a0e.11779170.header.d2.287d2d2b4ZdYxs&regist=true">Become a Seller</Link></li>
                <li><Link to="https://pages.daraz.com.np/wow/gcp/daraz/channel/np/daraz-pay/daraz-pay?spm=a2a0e.11779170.header.d9.287d2d2bLXwgwF">Recharge & Payments</Link></li>
                <li><Link to="https://helpcenter.daraz.com.np/page/home?pageId=3&language=en">Help & Support</Link></li>
              </ul>
            </nav>


      
            <div className='save-more '>
                <img className='logo-1 ' src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" />
                <p className='w-100 ' style={{fontSize:13}}>Save More on App</p>
            </div>
            



          </div>
        </div>
        <div className="navigation ">
          <div className="d-flex gap-2 justify-content-between">
            <div>
             <Link to="/"><img className='logo-main ' src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png" alt="" /></Link> 
            </div>
            <div className="categories mt-3">
          <div className="container">
            <p className='d-flex justify-content-between'><Link  >Categories <i class="fa fa-angle-down" aria-hidden="true"></i></Link> </p>
            {/* Add your category links or content here */}
          </div>
        </div>
            <form className="d-flex align-items-center "  role="search">
              <input className="form-control me-2 " style={{borderRadius:10 ,fontSize:15}} type="search" placeholder="Search in Daraz.."  aria-label="Search" />
              <i class="fa fa-search  search text-secondary rounded p-1  " style={{fontSize:15,backgroundColor:'#f857068e'}} aria-hidden="true"></i>
            </form>
            <div className="d-flex gap-2 mt-3 text-light align-items-center ">
              <div className="d-flex gap-2 ">
              <i class="fa fa-user-o " aria-hidden="true"></i>
              <p style={{fontSize:13}}><Link to="/login" >Login</Link></p>
              </div>
              <p style={{fontSize:13}}>|</p>
              <p style={{fontSize:13}}><Link to="">sign up</Link></p>
              <div className='d-flex gap-2 text-light'>
            <i class="fa fa-globe  ms-3" aria-hidden="true"></i>
            <p style={{fontSize:13}}>EN</p>
            </div>
            <div className='text-light mb-1'><i class="fa fa-shopping-cart mb-3 ms-3" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/:lid" element={<Login/>}/>
          <Route path='/cat/:catid' element={<Category/>}/>
          <Route path='/details/:did' element={<Details/>}/>
        

          
      </Routes>
         
    </header>
         
       
  )
}

export default Header