import React,{ useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

// Context
import { productsContext } from '../context/productsContextProvider';

const ProductDetails = () => {

    const params = useParams();
    const data = useContext(productsContext)
    const product = data[params.id - 1]
    const {image, title, price, description, category} = product;
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category: </span>{category}</p>
                <div>
                    <span>{price}$</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;