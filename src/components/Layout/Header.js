import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Summary from './Summary';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div>
      <img className={classes['main-image']} src="https://static.vecteezy.com/system/resources/previews/024/400/264/non_2x/table-scene-with-a-selection-of-delicious-foods-top-view-over-a-dark-wood-banner-background-generate-ai-free-photo.jpg" alt="img not found"></img>
      <Summary/>
      </div>
     
    </Fragment>
  );
};

export default Header;
