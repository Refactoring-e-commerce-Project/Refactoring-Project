'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__exclusive">
        <a href="/">Exclusive</a>
      </div>

      <div className="second__hero__container">
        <div className="hero__navigation">
          <a className="hero__home" href="/">
            Home
          </a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a className="sign__hero" href="/sign">
            Sign Up
          </a>
        </div>
        <div className="icons__search__hero">
          <input
            className="search__hero"
            type="text"
<<<<<<< HEAD
            placeholder="What are you looking for?"
=======
            placeholder="What are u looking for?"
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
          />
          <FontAwesomeIcon className="icon__search__hero" icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="allicon__hero">
        <FontAwesomeIcon className="fa-heart" icon={faHeart} />
        <FontAwesomeIcon className="fa-shopping-cart" icon={faShoppingCart} style={{ fontSize: "16px", color: "black" }} />
<<<<<<< HEAD
        <div className="user__icon">
          <FontAwesomeIcon className="icon__user__hero" icon={faUser} />
        </div>
=======
        {/* <div className="user__icon">
<<<<<<< HEAD
          <FontAwesomeIcon className="icon__user__hero" icon={faUser} />
=======
          <FontAwesomeIcon className="icon__user__hero" icon={faUser} /> // icon user 
>>>>>>> 1678ad5fdfa07383c1635e3610675430cdb21238
        </div> */}
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
      </div>
    </div>
  );
}

export default Hero;
