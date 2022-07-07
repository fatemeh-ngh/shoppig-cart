import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from '../../context/CartContextProvider';

//icons
import shopIcon from '../../assets/icons/shop.svg';

const Navbar = () => {
    
    const {state} = useContext(cartContext)

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shopIcon} alt="shop icon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;