import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Summary from './Summary';
import { IMG_URL } from "../../Utility/DummyData";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
      </header>
      <div>
      <img className={classes['main-image']} src={IMG_URL} alt="img not found"></img>
      <Summary/>
      </div>
     
    </Fragment>
  );
};

export default Header;
