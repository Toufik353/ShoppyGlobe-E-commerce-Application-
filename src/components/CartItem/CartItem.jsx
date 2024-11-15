import React, { useState } from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { removeQuantity, updateQuantity } from "../../redux/cartSlice";

function CartItem({ item }) {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    const handleItemQuantity = (e) => {
        const newQuantity = Number(e.target.value);
        setQuantity(newQuantity);
        if (newQuantity >= 1) {
            dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
        }
    };

    const handleRemoveItem = () => {
        dispatch(removeQuantity(item.id));
    };

    return (
        <div className={styles.cartItem}>
            <img src={item.thumbnail} alt={item.title} className={styles.cartItemImage} />
            <div className={styles.cartItemInfo}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <div className={styles.cartItemQuantity}>
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        value={quantity}
                        min="1"
                        onChange={handleItemQuantity}
                    />
                </div>
            </div>
            <button 
                className={styles.removeButton} 
                onClick={handleRemoveItem}
            >
                Remove
            </button>
        </div>
    );
}

export default CartItem;
