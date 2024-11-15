import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useFetchProducts from '../../useFetchProducts';


function ProductList() {
    const { data, loading, error } = useFetchProducts('https://dummyjson.com/products')
const [filteredProducts, setFilteredProducts] = useState([])
    
    useEffect(() => {
        if (data) {
            setFilteredProducts(data)
        }
    }
    
    , [data])

  const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    if (loading) {
        return <p>Loading......</p>
    }

    if (error) {
        return <p>Error fetching products</p>
    }

    const handleSearchInput = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredProducts = data.filter(product => product.title.toLowerCase().includes(searchQuery));
     setFilteredProducts(filteredProducts)

    }


  return (
      <div className={styles.container}>
          <input type="search" onChange={handleSearchInput} className={ styles.inputSearch} placeholder='type here to search by title...'/>
      <h1>Product List</h1>
      <div className={styles.productList}>
        {filteredProducts && filteredProducts.map((product) => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
