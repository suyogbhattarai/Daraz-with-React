import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./details.scss"
import { Link } from 'react-router-dom';


function Details() {
    const [details,setDetails]= useState([]);

useEffect(() => {
    const fetchDetails=async()=>{
        const response=await fetch("https://fakestoreapi.com/products")
        const details=await response.json(); 
        setDetails(details);
    };
    fetchDetails();

}, []);



    let {did}=useParams()
    
let pdetail=details.filter((t)=>t.title==did);
  return (
    <>
    <div className="container">
       <h3> <span className='mb-3'>Details:</span></h3>
       <div className="row">
       {pdetail.map((d)=>(
        <>
        <div className="col-lg-3">
            <img style={{width:150}} src={d.image} alt="" />  
            
        </div>
        <div className="col-lg-6">
            <h3>{d.title}</h3>
            <div className='d-flex gap-2'>
            <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
            <span>|4 star rated|</span>
            </div>
            <h3>
                <span>${d.price}</span>
            </h3>
            <div className='d-flex gap-4'>
            <div className="btn btn-info text-light buy-btn ">
               <p><Link >Buy Now</Link></p> 
            </div>
            <div className="cart-btn">
                <p cla><Link>Add to cart</Link></p>
            </div>
            </div>

        </div>
        </>
         )
         )}
       </div>
    </div>
    </>
  )}


export default Details