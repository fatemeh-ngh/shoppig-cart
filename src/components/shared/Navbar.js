import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from '../../context/CartContextProvider';

//icons
import shopIcon from '../../assets/icons/shop.svg';

//style
import styles from './Navbar.module.css';

const Navbar = () => {
    
    const {state} = useContext(cartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shop icon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;