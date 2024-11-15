import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import useFetchProducts from "../../useFetchProducts";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const { productId: id } = useParams();
    const { data: product, loading, error } = useFetchProducts(`https://dummyjson.com/products/${id}`, true);
    const dispatch = useDispatch();

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>{error}</p>;

  const handleAddToCart = () => {
    const parsedQuantity = Number(quantity);
    if (!parsedQuantity || parsedQuantity < 1) {
        alert("Please select a valid quantity!");
        return;
    }
    dispatch(addItem({ product, quantity: parsedQuantity }));
};


    return (
        <div className={styles.productDetails}>
            <div className={styles.productImages}>
                {product?.images?.map((image, index) => (
                    <img key={index} src={image} alt={`${product.title} - ${index + 1}`} className={styles.productImage} />
                ))}
            </div>

            <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>{product.title}</h1>
                <p className={styles.productPrice}>${product.price}</p>

                <div className={styles.productRating}>
                    <span>Rating: {product.rating} / 5</span>
                    <span> ({product.reviews?.length} reviews)</span>
                </div>

                <p className={styles.productDescription}>{product.description}</p>

                <div className={styles.productSpecifications}>
                    <h3>Specifications:</h3>
                    <ul>
                        {product.specifications?.map((spec, index) => (
                            <li key={index} className={styles.specificationItem}>{spec}</li>
                        ))}
                    </ul>
                </div>

                <p className={`${styles.stockStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>

                <div className={styles.quantitySelector}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>

                <div className={styles.actionButtons}>
                    <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                    <button className={styles.buyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
