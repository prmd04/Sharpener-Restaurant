import React from "react";
import classes from './HeaderCartButton.module.css';
import { FaShoppingCart } from "react-icons/fa";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <FaShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;