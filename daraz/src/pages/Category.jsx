import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {
  const [catdata,setCatData]=useState([])

  useEffect(() => {
    const fetchCategories=async()=>{
      const response= await fetch("https://fakestoreapi.com/products");
      const catdata= await response.json();
      setCatData(catdata);
    }
    fetchCategories();
  

  }, [])
  let {cid}=useParams();
  let catdetail=catdata.filter((d)=>d.Category=={cid})
  
  return (
    <>
    <div className="container">
    <h3>Category-{cid.toUpperCase()}</h3>

    <div className="row">
      {catdetail.map((d)=>(
        <>
         <div className="col-lg-3">
         <Link to={`/details/${d.title}`}> <div className="card p-2">
            <div className="text-center">
            <Link to={`/details/${d.title}`}> <img style={{width:80,maxHeight:80}} src={d.image} alt="" /></Link>
              <p><Link to={`/details/${d.title}`}>{d.title}</Link></p>
            </div>
          <h4>$:{d.price}</h4>
          <p><Link><ul className='text-primary'>Buy Now</ul></Link></p>

          </div>
          </Link>

       
         </div>
        </>
      ))}
     
    </div>
    </div>
    </>
  )
}

export default Category