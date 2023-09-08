import React, { useState,useEffect } from 'react'
import "./header.scss"
import { Routes,Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login';

import Details from '../pages/Details';
import Category from '../pages/Category';
import Categories from './Categories';
import Loginform from './Loginform';

function useScrollToShow() {
  const [showCategories, setShowCategories] = useState(false);


  const handleScroll = () => {
    if (window.scrollY >= 750) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showCategories;
}






function Header() {
  const [showDrop,setShowDrop]=useState(false)
  const handleMouseEnter=()=>{
    setShowDrop(true)
  }
  const handleMouseLeave=()=>{
    setShowDrop(false)
  }

  const [category, setCategory] = useState([])

useEffect(() => {
  const fetchCategories = async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const category = await response.json();
    setCategory(category);
  };
  fetchCategories();

}, []);
  
  const showCategories = useScrollToShow();

 


 
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
   
     <div className="header py-4">
      <div className="container ">
        {!showCategories &&(
        <div className="top ">
          <div className="d-flex justify-content-between">

            <nav>
              <ul className='d-flex gap-4 '>
                <li ><Link className='text-light' to="https://sellercenter.daraz.com.np/v2/seller/login?spm=a2a0e.11779170.header.d2.287d2d2b4ZdYxs&regist=truehttps://sellercenter.daraz.com.np/v2/seller/login?spm=a2a0e.11779170.header.d2.287d2d2b4ZdYxs&regist=true">Become a Seller</Link></li>
                <li><Link className='text-light' to="https://pages.daraz.com.np/wow/gcp/daraz/channel/np/daraz-pay/daraz-pay?spm=a2a0e.11779170.header.d9.287d2d2bLXwgwF">Recharge & Payments</Link></li>
                <li><Link className='text-light' to="https://helpcenter.daraz.com.np/page/home?pageId=3&language=en">Help & Support</Link></li>
              </ul>
            </nav>


      
            <div className='save-more   ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img  className='logo-1 ' src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="" />
                <p className='w-100 p-1 ' style={{fontSize:13}}>Save More on App</p>
                {showDrop &&( <div className="drop-down  p-3 ">
                  <img style={{width:300,}}  src="https://icms-image.slatic.net/images/ims-web/34d8863d-547e-4bd7-ba41-5fd7022366de.png" alt="" />
                  <h5 className='text-center mt-3 text-black'>Download the App</h5>
                  <img src="https://icms-image.slatic.net/images/ims-web/b1bacff9-3e2b-4fd5-9b7b-854f42048c23.png" alt="" />
                </div>)}
               
            </div>
            



          </div>
        </div>
        )}
        
        
        <div className="navigation   ">
          <div className="d-flex gap-4 justify-content-between">
            <div>
             <Link to="/"><img className='logo-main ' src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png" alt="" /></Link> 
            </div>
            {showCategories && (
           <div class="cat-drop" onMouseLeave={handleMouseLeave}>
           <button onMouseEnter={handleMouseEnter} style={{border:"none",background:"none"}} class=" mt-3 pb-4 text-light dropdown-toggle  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
             <Link className='text-light'>Categories</Link>
           </button>
           {showDrop &&(  <ul class="drop-down-cat  p-3 " >
            {category.map((c)=>(  <li className='text-black '><Link to={`/cat/${c}`} class="dropdown-item text-secondary" href="#">{c}</Link></li>))}
           
        
           </ul>)}
         
         </div>
              )}
            <form className="d-flex align-items-center "  role="search">
              <input className="form-control me-2 " style={{borderRadius:10 ,fontSize:15}} type="search" placeholder="Search in Daraz.."  aria-label="Search" />
              <div className='search'>
            <i class="fa fa-search p-1  "  aria-hidden="true"></i>
            </div>
            </form>
           
            <div className="d-flex gap-3 mt-3 text-light align-items-center  ">
              <div className="d-flex gap-3 ">
              <i class="fa fa-user-o " aria-hidden="true"></i>
              <p style={{fontSize:13}}><Link to="/login" className='text-light' >Login</Link></p>
              </div>
              <p style={{fontSize:13}}>|</p>
              <p style={{fontSize:13}}><Link to="/signup" className='text-light'>sign up</Link></p>
              <div className='d-flex gap-2 text-light'>
            <i class="fa fa-globe  ms-3" aria-hidden="true"></i>
            <p style={{fontSize:13}}><Link className='text-light'>EN</Link><i className="fa fa-angle-down" aria-hidden="true"></i></p>
            </div>
            <div className='text-light mb-1'><Link className='text-light'><i className="fa fa-shopping-cart mb-3 ms-3" aria-hidden="true"></i></Link></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/:lid" element={<Login/>}/>
          <Route path='/cat/:cid' element={<Category/>}/>
          <Route path='/details/:did' element={<Details/>}/>
          <Route path='/loginform' element={<Loginform/>}/>
        

          
      </Routes>
         
    </header>
         
       
  )
}

export default Header