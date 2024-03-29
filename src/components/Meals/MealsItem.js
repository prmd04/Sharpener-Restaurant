import React, { useContext } from 'react'
import classes from "./MealsItem.module.css";
import MealsItemForm from './MealsItemForm';
import CartContext from '../../store/CartContext';

const MealsItem = (props) => {

  const cartCtx =  useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) =>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.additem}>
        <MealsItemForm onAddToCart={addToCartHandler}/>
      </div>

    </li>
  )
}

export default MealsItem