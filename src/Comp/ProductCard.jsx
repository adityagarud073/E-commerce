// ProductCard Component
import React from 'react';
import grid5 from '../assets/grid__5.png';
import grid6 from '../assets/grid__6.png';
import grid7 from '../assets/grid__7.png';
import grid8 from '../assets/grid__8.png';
import grid9 from '../assets/grid__9.png';

const ProductCard = ({ product }) => {
  return (
    <div className="card border-0">
      <img
        src={require(`../assets/${product.img}`)}
        className="card-img-top"
        alt={product.title}
        loading="lazy"
      />
      <div className="card-body text-center">
        <a href="#" className="text-decoration-none text-dark fs-6">
          {product.title}
        </a>
        <h5 className="card-title text-center mt-3">
          {product.originalPrice ? (
            <>
              <del>{product.originalPrice}</del>
              <span className="ps-2 text-danger">{product.price}</span>
            </>
          ) : (
            <span>{product.price}</span>
          )}
        </h5>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
