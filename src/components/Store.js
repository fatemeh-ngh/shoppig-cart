import React,{ useContext } from 'react';

// Components
import Product from './shared/Product';

// context
import { productsContext } from '../context/productsContextProvider';

//styles
import styles from './Store.module.css'

const Store = () => {
    const products = useContext(productsContext)
    return (
        <div className={styles.container}>
            {
                products.map(product => 
                    <Product key={product.id} productData={product}/>
                )
            }
        </div>
    );
};

export default Store;