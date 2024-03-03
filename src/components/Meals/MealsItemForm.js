import React, { useRef, useState } from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ add</button>
      {!amountValid && <p>Please Enter a Valid amount (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
