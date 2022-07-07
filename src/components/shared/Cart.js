import React,{useContext} from 'react';

//Context
import { cartContext } from '../../context/CartContextProvider';

//Function
import { shorter } from '../../helper/functions';

//Icons
import trashIcon from "../../assets/icons/trash.svg"

const Cart = (props) => {

    const {image, title, price, quantity} = props.data;
    const {dispatch} = useContext(cartContext);

    return (
        <div>
          <img src={image} alt="product"/>
          <div>
            <h3>{shorter(title)}</h3>
            <p>{price} $</p>
          </div>
          <div>
            <span>{quantity}</span>
          </div>
          <div>
            {
                quantity > 1 ?
                <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>:
                <button onClick={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}><img src={trashIcon} alt="trash" style={{width:'20px'}}/></button>
            }
            <button onClick={() => dispatch({type:'INCREASE', payload: props.data})}>+</button>
          </div>
        </div>
    );
};

export default Cart;