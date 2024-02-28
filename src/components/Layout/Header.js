import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="main">
        <div className="header">
          <p>ReactMeals</p>
        </div>
        <div className="cart">
          <p>cart item</p>
          <p>0</p>
        </div>
      </div>
      <img className="img" src="https://static.vecteezy.com/system/resources/previews/024/400/264/non_2x/table-scene-with-a-selection-of-delicious-foods-top-view-over-a-dark-wood-banner-background-generate-ai-free-photo.jpg" alt="img not found"></img>
    </div>
  );
};

export default Header;
