import React from 'react'
import classes from './MealsItemForm.module.css';
import Input from '../UI/Input';

const MealsItemForm = (props) => {
  return <form className={classes.form}>
    <Input label='Amount' input={{
      id:'Amount',
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1'
    }}/>
    <button>+ add</button>
  </form>
}

export default MealsItemForm