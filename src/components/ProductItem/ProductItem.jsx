import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';


function ProductItem({ product }) {
    const dispatch = useDispatch();

      const handleAddToCart = (product) => {
      dispatch(addItem({product,quantity:1}));
  };
    return (
              <div className={styles.productItem}>
      <div className={styles.productImage}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={styles.productDetails}>
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating} / 5</p>
        <p><strong>${product.price}</strong></p>
        <Link to={`/productList/${product.id}`} className={styles.viewDetails}>
          View Details
        </Link>
        <button onClick={() => handleAddToCart(product)} className={styles.addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  
  );
}

export default ProductItem;
