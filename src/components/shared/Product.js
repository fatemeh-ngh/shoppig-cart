import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

// functions
import { shorter, isInCart, quantityCount } from '../../helper/functions';

//Context
import { cartContext } from '../../context/CartContextProvider';

//icons 
import trashicon from '../../assets/icons/trash.svg'

//styles
import styles from './Product.module.css'

const Product = ({productData}) => {

    const {state, dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img  className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}}/>
            <h3>{shorter(productData.title)}</h3>
            <p>{`${productData.price}$`}</p>
            <div  className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>detalis</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE-ITEM", payload: productData})}><img src={trashicon} alt='trash icon' style={{width:'20px'}}/></button>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;