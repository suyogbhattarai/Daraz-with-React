import React, { useState } from 'react'
import "./home.scss"
import Categories from '../components/Categories';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
{/* $brand:#f85606; */}
import "../pages/Details"


function Home() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    const recieveProducts=async()=>{
      const response=await fetch("https://fakestoreapi.com/products");
      const products=await response.json();
      setProducts(products);
    };

    
    
  
   recieveProducts();
  }, [])
  
 
  return (
    <>
    <div className="home container">
    <div className="banner-main">
      <div >
        <div className="row "  >
          <div className="col-lg-3 category-box ">
            <p className='cat-title' >Mega Menu </p>
           

            <Categories/>
          </div>
          <div className="col-lg-9 ">
            <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
              <div className="carousel-inner rounded">
                <div className="carousel-item active" data-bs-interval="700">
                  <img src="https://icms-image.slatic.net/images/ims-web/cc8686c0-0795-4480-9800-58a3f3eacf54.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src="https://icms-image.slatic.net/images/ims-web/53ae2976-415a-43e3-b4b1-d6e39bf5e94e.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src="https://icms-image.slatic.net/images/ims-web/cf97d92e-e16a-40f7-b2d3-07d2c4ee49d8.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="products">
      <h4 className='mb-4 mt-5 products-title'>Just For You</h4>
      <div className="row">
      {products.map((prod)=>
      <>
      <div className="col-lg-2 mb-4 d-flex item-center ">
        <Link  to={`/details/${prod.title}`}>
      <div style={{maxWidth:1400,height:260,overflow:'hidden'}} className="card shadow p-4 pb-3 hover-zoom"   >
        <div className='text-center'> 
        <Link to={`/details/${prod.title}`}><img style={{maxWidth:100,maxHeight:100,overflow:'hidden',textAlign:'center'}} src={prod.image}  alt="" /></Link>
        <p style={{
  fontSize: 14,
  paddingTop:3,
  display: '-webkit-box',
  WebkitLineClamp: 2, // Number of lines you want to display
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}><Link to={`/details/${prod.title}` } className='text-black ' >{prod.title}</Link></p>
</div>
        <p >${prod.price}</p>
        <div className="d-flex  "><u className='text-primary'><a href="">Buy Now!</a></u></div>
      </div>
      </Link>
      </div>
      </>
       )}
      </div>
      <div style={{marginInlineStart:500}}  className=' load-btn '><h4 className='text-center p-2'>Load More</h4></div>

    </div>
    </div>
    </>
   
  )
}


export default Home