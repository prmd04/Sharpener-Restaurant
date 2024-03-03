import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;
  
  const cartItemNumber = items.reduce((curr,item)=>{
    return curr+item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
