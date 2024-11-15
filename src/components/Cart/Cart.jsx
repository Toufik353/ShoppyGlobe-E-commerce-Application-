import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    console.log("cartItems",cartItems)

    const count = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    },0)

    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            <div className={styles.cartItems}>
                {cartItems.map(item => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                    />
                ))}
            </div>
            <div className={styles.cartTotal}>
                <h3>Total: {count} </h3>
            </div>
        </div>
    );
}

export default Cart;
