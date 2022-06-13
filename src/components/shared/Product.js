import React from 'react';
import { Link } from 'react-router-dom'

// functions
import { shorter } from '../../helper/functions';


const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{width: "200px"}}/>
            <h3>{shorter(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div>
                <Link to={`/products/${productData.id}`}>detalis</Link>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;