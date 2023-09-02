import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./home.scss"
{/* $brand:#f85606; */}

function Home() {
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
    <div className="home">
    <div className="banner-main">
      <div className="container">
        <div className="row " onMouseLeave={handleMenuLeave} >
          <div className="col-lg-3 category-box "  >

            <h5 className='cat-title' >Category:</h5>

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
              <div className="card col   sub-menu" >

                <ul class="list-group" onMouseEnter={() => handleTitleHover(prodtitle.title)}>
                  {catfilter.map((prodtitle) =>
                    <li class="list-group-item text-secondary d-flex gap-5 justify-content-between " style={{ fontSize: 13 }} key={prodtitle.title} onMouseEnter={() => handleTitleHover(prodtitle.title)}><Link>{ prodtitle.title.toUpperCase()}</Link><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                  )
                  }
                </ul>

              </div>
            )}
            {currentTitle && (
              <div className="card  col   product-menu p-3  "  >
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
      </div>
    </>
  )
}

export default Home