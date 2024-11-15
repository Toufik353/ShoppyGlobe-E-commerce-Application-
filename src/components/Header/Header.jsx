import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";

function Header() {
    const { cartItems } = useSelector(state => state.cart);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>ShoppyGlobe</h1>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
                    <li className={styles.list}>
                        <Link to="/" className={styles.link} onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/productList" className={styles.link} onClick={toggleMenu}>Products</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/cart" className={styles.link} onClick={toggleMenu}>
                            <i className="fas fa-shopping-cart"></i> Cart: {cartItems.length}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
