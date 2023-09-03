import React from 'react'
import { Link } from 'react-router-dom'
import"./footer.scss"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row quick-link">
          <div className="col-lg-3">
            <h5>Customer Care</h5>                
            <ul>
              <li style={{fontSize:13}}><Link className='text-light'> Help Center</Link></li>
              <li style={{fontSize:13}}><Link  className='text-light'>How to Buy</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'> Returns & Refunds</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'> Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Daraz</h5>                                 
            <ul>
              <li style={{fontSize:13}}><Link className='text-light'>  About Daraz</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Careers</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Daraz Blogs</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'> Terms & Conditions</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Privacy Policy</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Digital Payments</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Daraz Customer University</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Daraz Affiliate Program</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Review & Win</Link></li>
              <li style={{fontSize:13}}><Link className='text-light'>Meet the winners</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Daraz International</h5> 
            <div className="d-flex gap-5">
              <p style={{fontSize:13}}><Link className='text-light'>Pakistan</Link></p>
              <p style={{fontSize:13}}><Link className='text-light'>Bhutan</Link></p>

              </div>   
              <div className="d-flex gap-5">
                <p style={{fontSize:13}}><Link className='text-light'>Nepal</Link></p>
                <p style={{fontSize:13}}><Link className='text-light'>India</Link></p>
              </div>  
            <div className="d-flex">
              <p style={{fontSize:13}}><Link className='text-light'>Bangladesh</Link></p>
              </div>          
        
          </div>
          <div className="col-lg-3">
            <h5>Exclusive Deals and offers</h5>                
          <div className="d-flex">
            <img className='w-100' style={{maxWidth:100}} src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png" alt="" />
           <img className='w-100' style={{maxWidth:100}} src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer