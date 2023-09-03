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
    <div className="categories" onMouseLeave={handleMenuLeave}>
     <div className="card   rounded-pill ">
              <ul class="list-group">
                {category.map((cat) =>
                  <li class="list-group-item text-secondary d-flex justify-content-between" style={{ fontSize: 13 }} key={cat}
                    onMouseEnter={() => handleCategoryHover(cat)}><Link>{cat.toUpperCase()}</Link><i class="fa fa-angle-double-right " aria-hidden="true"></i></li>
                )
                }
              </ul>
    </div>

            {currentCategory && (
              <div className="card col   sub-menu"  >

                <ul class="list-group" onMouseEnter={() => handleTitleHover(prodtitle.title)}>
                  {catfilter.map((prodtitle) =>
                    <li class="list-group-item text-secondary d-flex gap-5 justify-content-between " style={{ fontSize: 13 }} key={prodtitle.title} onMouseEnter={() => handleTitleHover(prodtitle.title)}><Link>{ prodtitle.title.toUpperCase()}</Link><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                  )
                  }
                </ul>

              </div>
            )}
            {currentTitle && (
              <div className="card  col   product-menu p-3  "   >
                <ul class="list-group">
                  {titlefilter.map((titl) =>
                    <>
                    <div className="d-flex gap-3 mb-3">
                      <img style={{ width: 80 }} src={titl.image} alt="" />
                      <p class=" text-secondary " style={{ fontSize: 13 }} key={titl.id}><Link>{titl.title.toUpperCase()}</Link></p>
                      </div>
                      <div className='list-group-item'>
                      <p class=" text-secondary " style={{ fontSize: 13 }} key={titl.price}><Link>Price:${titl.price}</Link></p>
                      <p class=" text-secondary " style={{ fontSize: 13 }} key={titl.description}><Link>Description:<br/>{titl.description}</Link></p>
                      
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