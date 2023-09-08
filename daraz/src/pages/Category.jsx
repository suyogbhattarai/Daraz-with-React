import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Category.scss"

function Category() {
  const [catdata,setCatData]=useState([])
  const [notFound, setNotFound] = useState(false); // Add a state to track whether the product is found

  useEffect(() => {
    const fetchCategories=async()=>{
      const response= await fetch("https://fakestoreapi.com/products");
      const catdata= await response.json();
      setCatData(catdata);
    }
    fetchCategories();
  

  }, [])
   // Check if the product is not found, and set the notFound state


  let {cid}=useParams();
  let catdetail=catdata.filter((d)=>d.category==cid)
  useEffect(() => {
    if (catdata.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [catdata]);
  
  return (
    <>
    <div className="container">
    <h3 className='cat-title'>Category-{cid.toUpperCase()}</h3>
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
      {catdetail.map((d)=>(
        <>
      <div className="col-lg-2 mb-4 d-flex item-center ">
      <Link  to={`/details/${d.title}`}>
    <div style={{maxWidth:1400,height:260,overflow:'hidden'}} className="p-card  pb-3  "   >
      <div className='row'> 
      <div className="col-lg-12" style={{maxWidth:100,maxHeight:100}}>
      <Link to={`/details/${d.title}`}><img style={{maxWidth:200,maxHeight:100,overflow:'hidden',textAlign:"center"}} src={d.image}  alt="" /></Link>
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
}}><Link to={`/details/${d.title}` } className='text-black ' >{d.title}</Link></p>
  </div>
      </div>
      <div className='row'> 
      <div className="col-lg-12">

      <p className='pp'>Rs.{d.price}</p>
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
      ))}
     
    </div>
        )}
    </div>
    </>
  )
}

export default Category