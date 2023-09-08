import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.scss';
import { Link } from 'react-router-dom';
import Loginform from '../components/Loginform';

function Details() {
  const [details, setDetails] = useState([]);
  const [notFound, setNotFound] = useState(false); // Add a state to track whether the product is found



  

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const details = await response.json();
      setDetails(details);
    };
    fetchDetails();
  }, []);

  let { did } = useParams();

  let pdetail = details.filter((t) => t.title === did);

  // Check if the product is not found, and set the notFound state
  useEffect(() => {
    if (pdetail.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [pdetail]);
  const [cart,setCart]=useState(1)

      
  
  

  return (
    
    <>
      <div className="container">
        <h3>
          <span className="mb-3">Details:</span>
        </h3>
        {notFound ? ( // Display a message if the product is not found
          <div className=' text-secondary text-center p-5 m-3'>
            <div className="loader mx-auto my-3"></div>
           
            <h1 className='fw-bolder'>  please wait !</h1>
            <p> If it takes long browse other products</p>
           
            <hr />
            <Link to="/">
            <div className="brows-btn">Browse</div>
            </Link>
            </div>
            
        ) : (
          <div className="row">
            {pdetail.map((d) => (
              <>
                <div className="col-lg-3">
                  <img style={{ width: 150 }} src={d.image} alt="" />
                </div>
                <div className="col-lg-6">
                  <h3>{d.title}</h3>
                  <div className="d-flex gap-2">
                    <p style={{fontSize:13}}  className='text-warning'>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <span  style={{fontSize:13}} className='text-primary'> {d.rating.rate} ratings | 11 answered questions </span>
                 

                  </div>
                  <p  style={{fontSize:13}} >Brand: <span className='text-primary'> Your brand here | Your brand quote here</span></p>
                  <hr />
                  <h3>
                    <span style={{fontSize:40,fontWeight:400}} >Rs.{d.price}</span>
                  </h3>
                  <p  style={{fontSize:15}}>Promotion: <span  style={{backgroundColor:"#f85606ff",color:"white",fontSize:13,padding:4,borderRadius:4,marginLeft:10}}>Min.Spend Rs.500 Capped at Rs. 150 <i class="fa fa-angle-down" aria-hidden="true"></i></span></p>
                  <div className="d-flex gap-3  mt-3">
                    <p>Quantity:</p>
                    <button style={{border:"none",backgroundColor:"white",padding:5}} onClick={()=>setCart(cart-1)}>-</button>
                    <p className='mt-3'>{cart}</p>
                    <button style={{border:"none",backgroundColor:"white",padding:5}} onClick={()=>setCart(cart+1)}>+</button>

                  </div>
                  <div className="d-flex gap-4 mt-4">
                    <div className=" text-light buy-btn">
                      <p>
                        <Link to={`/loginform`} className='text-light'>Buy Now</Link>
                      </p>
                    </div>
                    <div className="cart-btn">
                      <p className="">
                        <Link to={`/loginform`} className='text-light'>Add to cart</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{backgroundColor:""}} className="col-lg-3">
                  <div style={{fontSize:12}} className="deliver ">
                  <p style={{fontSize:13}}>Delivery</p>
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-2">
                  <i class="fa fa-map-marker me-2" aria-hidden="true"></i>
                  <p style={{fontSize:14}}>Bagmati,Kathmandu Metro 22 - Newroad Area Newroad</p>
                  </div>
                  <p className='text-primary' style={{fontWeight:300,fontSize:15}}> CHANGE</p>
                  </div>
                  <div className="d-flex gap-1">
                  <p  style={{fontSize:14}}><i class="fa fa-bus me-3" aria-hidden="true"></i> Free Delivery 11 Sep - 13 Sep <br /><span className='ms-4'>3 - 5 day(s)</span></p>
                  <p className='fw-bold'>Free</p>
                  </div>
                  <div style={{fontSize:14}} className="bg-light p-2">
                  <p>Enjoy free shipping promotion with minimum spend of Rs. 699 from <span className='text-primary'>your brand here</span></p>

                  </div>
                  <p style={{fontSize:16}}><i class="fa fa-money me-2" aria-hidden="true"></i> Cash on Delivery Available</p>
                  </div>
                  <hr />
                  <div className="service">
                  <p style={{fontSize:13}}>Service</p>
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-2">
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  <p style={{fontSize:14}}>7 day return <br /><span className='ms1 text-secondary'>Change of mind is not applicable</span></p>
                  </div>

                  </div>
                  <div className="d-flex gap-1">
                  <p  style={{fontSize:14}}><i class="fa fa-bus me-3" aria-hidden="true"></i> Free Delivery 11 Sep - 13 Sep <br /><span className='ms-4'>3 - 5 day(s)</span></p>
                
                  </div>
                  <div style={{fontSize:14}} className="bg-light p-2">
                    <div className="d-flex">
                      <div>
                    <p className='text-secondary'> Sold by<br/><span className='text-black' style={{fontSize:16}}>Brand</span></p>
                  <p>Enjoy free shipping promotion with minimum spend of Rs. 699 from <span className='text-primary'>your brand here</span></p>
                  </div>
                  <div>
                  <i class="fa fa-comments" aria-hidden="true"></i>
                  <span className='text-primary'>CHAT</span>
                  </div>
                    </div>
                  </div>
                  <p><i class="fa fa-money me-2" aria-hidden="true"></i> Cash on Delivery A</p>
                  </div>

                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Details;