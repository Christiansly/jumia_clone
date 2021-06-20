import React from 'react'
import './Product.css'
function Product({title, img, price, fakePrice, discount}) {
    return (
      <div className="product">
        <div className="product__image">
          <img
            src={img}
            alt=""
          />
          <div className="product__discount">
              -85%
          </div>
        </div>
        <div className="product__detail">
          <p className="product__title">
            {title}
          </p>
          <p className="product__price">
              {price}
              <del>{fakePrice}</del>
          </p>
        </div>
      </div>
    );
}

export default Product
