import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.scss';
import { Link } from 'react-router-dom';

function Details() {
  const [details, setDetails] = useState([]);
  const [notFound, setNotFound] = useState(false); // Add a state to track whether the product is found

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const details = await response.json();
      setDetails(details);
    };
    fetchDetails();
  }, []);

  let { did } = useParams();

  let pdetail = details.filter((t) => t.title === did);

  // Check if the product is not found, and set the notFound state
  useEffect(() => {
    if (pdetail.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [pdetail]);

  return (
    <>
      <div className="container">
        <h3>
          <span className="mb-3">Details:</span>
        </h3>
        {notFound ? ( // Display a message if the product is not found
          <div className=' text-secondary text-center p-5 m-3'>
            <img style={{width:120}} src="https://w7.pngwing.com/pngs/902/706/png-transparent-computer-icons-emoticon-sadness-others-face-smiley-web-button-thumbnail.png" alt="" />
            <h1 className='fw-bolder'>Sorry, this product is not available currently!</h1>
            <br/>Please go back and browse other items</div>
        ) : (
          <div className="row">
            {pdetail.map((d) => (
              <>
                <div className="col-lg-3">
                  <img style={{ width: 150 }} src={d.image} alt="" />
                </div>
                <div className="col-lg-6">
                  <h3>{d.title}</h3>
                  <div className="d-flex gap-2">
                    <p>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <span>| 4 star rated |</span>
                  </div>
                  <h3>
                    <span>${d.price}</span>
                  </h3>
                  <div className="d-flex gap-4">
                    <div className="btn btn-info text-light buy-btn">
                      <p>
                        <Link>Buy Now</Link>
                      </p>
                    </div>
                    <div className="cart-btn">
                      <p className="cla">
                        <Link>Add to cart</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Details;
