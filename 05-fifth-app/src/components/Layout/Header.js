import React, { Fragment } from "react";
import rosesImage from "../../assets/Roses.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Roses Shop</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={rosesImage} alt="A Roses full of wonderfull Married!" />
      </div>
    </Fragment>
  );
};

export default Header;
