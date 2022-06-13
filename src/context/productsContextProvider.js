import React, { useState, useEffect, createContext } from 'react';
// Api
import { getProducts } from '../services/api';

const productsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts( await getProducts())
        }
        fetchApi();
    }, []);

    return (
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;