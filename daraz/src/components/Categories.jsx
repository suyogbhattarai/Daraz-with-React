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
     <div className="card cat-menu   rounded-pill ">
              <ul class="list-group">
                {category.map((cat) =>
                  <li class="list-group-item text-secondary d-flex justify-content-between" style={{ fontSize: 13 }} key={cat}
                    onMouseEnter={() => handleCategoryHover(cat)} ><Link to={`/cat/${cat}/`}>{cat.toUpperCase()}</Link><i class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                )
                }
              </ul>
    </div>

            {currentCategory && (
              <div className="card col   sub-menu"  >

                <ul class="list-group" onMouseEnter={() => handleTitleHover(prodtitle.title)} onMouseLeave={handleMenuLeave}>
                  {catfilter.map((prodtitle) =>
                   <Link  to={`/details/${prodtitle.title}`}><li class="list-group-item text-secondary d-flex gap-5 justify-content-between " style={{ fontSize: 13 }} key={prodtitle.title} onMouseEnter={() => handleTitleHover(prodtitle.title)}>{ prodtitle.title.toUpperCase()}<i class="fa fa-angle-double-right" aria-hidden="true"></i></li></Link> 
                  )
                  }
                </ul>

              </div>
            )}
            {currentTitle && (
              <div className="card  col   product-menu p-3  " onMouseLeave={handleMenuLeave}  >
                <ul class="list-group">
                  {titlefilter.map((titl) =>
                    <>
                    <div className="d-flex gap-3 mb-3">
                      <img style={{ width: 80 }} src={titl.image} alt="" />
                      <p class=" text-secondary " style={{ fontSize: 15 }} key={titl.id}><Link>{titl.title.toUpperCase()}</Link></p>
                      </div>
                      <div className='list-group-item'>
                      <p class=" text-secondary " style={{ fontSize: 13 }} key={titl.price}>Price:${titl.price}</p>
                      <p class=" text-secondary " style={{
  fontSize: 14,
  paddingTop:3,
  display: '-webkit-box',
  WebkitLineClamp: 4, // Number of lines you want to display
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