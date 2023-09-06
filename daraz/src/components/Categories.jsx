import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./categories.scss"

function Categories() {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([])
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentTitle, setCurrentTitle] = useState(null);
   

  
    const handleMenuLeave = () => {
      setCurrentCategory(null);
      setCurrentTitle(null);
    };
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const product = await response.json();
        setProduct(product);
      };
      fetchProducts();
  
    }, []);
    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const category = await response.json();
        setCategory(category);
      };
      fetchCategories();
  
    }, []);
  
    const handleCategoryHover = (category) => {
      setCurrentCategory(category);
    };
    const handleTitleHover = (title) => {
      setCurrentTitle(title);
    };
  
    let catfilter = product.filter((q) => q.category == currentCategory)
    let titlefilter = product.filter((q) => q.title == currentTitle)
  return (
    <>
    <div className="categories" >
     <div className="card cat-menu  ">
              <ul class="list-group">
                {category.map((cat) =>
                  <li class="list-group-item text-secondary d-flex justify-content-between py-3 " style={{ fontSize: 15,fontWeight:400,letterSpacing:3 }} key={cat}
                    onMouseEnter={() => handleCategoryHover(cat)} ><Link to={`/cat/${cat}/`} className='text-secondary'>{cat.toUpperCase()}</Link><i class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                )
                }
              </ul>
    </div>

            {currentCategory && (
              <div className="card col   sub-menu rounded"  >

                <ul class="list-group"  onMouseLeave={handleMenuLeave}>
                  {catfilter.slice(0,4).map((prodtitle) =>
                   <Link  to={`/details/${prodtitle.title}`}><li className="list-group-item text-secondary d-flex gap-5 justify-content-between p-3  " style={{
                    fontSize: 13,
                    paddingTop:3,
                    display: '-webkit-box',
                    WebkitLineClamp: 0, // Number of lines you want to display
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: "ellipsis",
                  }} key={prodtitle.title} onMouseEnter={() => handleTitleHover(prodtitle.title)}> { prodtitle.title.toUpperCase()}<i class="fa fa-angle-double-right" aria-hidden="true"></i></li></Link> 
                  )
                  }
                </ul>

              </div>
            )}
            {currentTitle && (
              <div className="card  col   product-menu p-3 " onMouseLeave={handleMenuLeave}  >
                <h4 className='ms-4 mb-3'> Preview:</h4>
                <ul class="">
                  {titlefilter.map((titl) =>
                    <>
                    <div className="d-flex gap-3 mb-2">
                      <img style={{ width: 80,height:80 }} src={titl.image} alt="" />
                      <p class=" text-secondary " style={{ fontSize: 15 }} key={titl.id}><Link>{titl.title.toUpperCase()}</Link></p>
                      </div>
                      <div className='list-group-item'>
                      <p class=" text-secondary " style={{ fontSize: 13 }} key={titl.price}>Price:${titl.price}</p>
                      <p class=" text-secondary " style={{
  fontSize: 14,
  paddingTop:1,
  display: '-webkit-box',
  WebkitLineClamp: 3, // Number of lines you want to display
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: "ellipsis",
}} key={titl.description}>Description:<br/>{titl.description}</p>
                      
                      </div>
                    </>

                  )
                  }
                </ul>
              </div>)}
              </div>
    </>
  )
}

export default Categories