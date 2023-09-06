import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Category.scss"

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
  let catdetail=catdata.filter((d)=>d.category==cid)
  
  return (
    <>
    <div className="container">
    <h3 className='cat-title'>Category-{cid.toUpperCase()}</h3>

    <div className="row">
      {catdetail.map((d)=>(
        <>
     <div className="col-lg-4 mb-4 d-flex item-center ">
        <Link  to={`/details/${d.title}`}>
      <div style={{maxWidth:1400,height:260,overflow:'hidden'}} className="card shadow p-4 pb-3 hover-zoom"   >
        <div className='text-center'> 
        <Link to={`/details/${d.title}`}><img style={{maxWidth:100,maxHeight:100,overflow:'hidden',textAlign:'center'}} src={d.image}  alt="" /></Link>
        <p style={{
  fontSize: 15,
  textAlign:"center",
  paddingTop:3,
  display: '-webkit-box',
  WebkitLineClamp: 2, // Number of lines you want to display
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}><Link to={`/details/${d.title}` } className='text-black ' >{d.title}</Link></p>
</div>
        <p >${d.price}</p>
        <div className="d-flex  "><u className='text-primary'><Link className='text-primary' href="">Buy Now!</Link></u></div>
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