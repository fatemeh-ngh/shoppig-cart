import React,{ useContext } from 'react';

// Components
import Product from './shared/Product';

// context
import { productsContext } from '../context/productsContextProvider';


const Store = () => {
    const products = useContext(productsContext)
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {
                products.map(product => 
                    <Product key={product.id} productData={product}/>
                )
            }
        </div>
    );
};

export default Store;