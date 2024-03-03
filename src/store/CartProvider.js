import React, { useReducer } from 'react'
import CartContext from './CartContext';

const defaultCartState = {
  items:[],
  totalAmount : 0
}

const cartReducer = (state,action) => {
  if(action.type === 'ADD'){
    const updateItem  = state.items.concat(action.item); //concat provide brand new array where push method edit the previous one
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return {
      items:updateItem,
      totalAmount:updateTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
  const addItemtoCartHandler = (item) => {
    dispatchCartAction({type:'ADD',item:item})
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id})
  };

  const cartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem : addItemtoCartHandler,
    removeItem:removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;