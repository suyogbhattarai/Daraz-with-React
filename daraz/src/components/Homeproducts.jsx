import React from 'react'
import "./homeproducts.scss"
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



function Homeproducts(props) {
    const [products,setProducts]=useState([])
    const [notFound, setNotFound] = useState(false); // Add a state to track whether the product is found
    useEffect(() => {
      const recieveProducts=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        const products=await response.json();
        setProducts(products);
      };
     recieveProducts();
    }, [])
    let chome=products.filter((c)=>c.category==props.title)

    useEffect(() => {
      if (chome.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    }, [chome]);
  return (
    <div className="products">
    <h4 className='mb-4 mt-5 products-title'>{props.title.toUpperCase()}</h4>
    {notFound ? ( // Display a message if the product is not found
          <div className=' text-secondary text-center p-5 m-3'>
            <div className="loader mx-auto my-3"></div>
     
      
            </div>
            
        ) : (
          <>
    <div className="row">
    {chome.map((prod)=>
    <>
   <div className="col-lg-2 mb-4 d-flex item-center ">
      <Link  to={`/details/${prod.title}`}>
    <div style={{maxWidth:1400,height:260,overflow:'hidden'}} className="p-card  pb-3  "   >
      <div className='row'> 
      <div className="col-lg-12" style={{maxWidth:100,maxHeight:100}}>
      <Link to={`/details/${prod.title}`}><img style={{maxWidth:200,maxHeight:100,overflow:'hidden',textAlign:"center"}} src={prod.image}  alt="" /></Link>
      </div>
      </div>
      <div className='row'> 
      <div className="col-lg-12" style={{maxHeight:150,maxWidth:150}} >
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
      </div>
      <div className='row'> 
      <div className="col-lg-12">

      <p className='pp'>Rs.{prod.price}</p>
      </div>
      </div>
      <div className='row'> 
      <div className="col-lg-12">
      <div className="d-flex gap-3 "><p style={{textDecoration:"line-through"}}>Rs.299</p><p>-82%</p></div>
    </div>
      </div>
      </div>
    </Link>
    </div>
    </>
     )}
    </div>
    </>
        )}

  </div>
  )
}

export default Homeproducts