"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./hero2.css";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  // const handleUserHis = () => {
  //   router.push("/clientPage/productHistory");
  // };
  const handleLogout = () => {
    localStorage.clear();
    console.log(localStorage);
    router.push("/login");
  };

  return (
    <div className="hero__container">
      <div className="hero__exclusive">
        <a href="/clientPage/clientHomePage">Exclusive</a>
      </div>

      <div className="second__hero__container">
        <div className="hero__navigation">
          <a className="hero__home" href="/clientPage/clientHomePage">
            Home
          </a>
          <a href="/clientPage/contact2">Contact</a>
          <a href="/clientPage/about2">About</a>
          <a className="sign__hero" href="/sign" onClick={handleLogout}>
            Sign Out
          </a>
        </div>
        <div className="icons__search__hero">
          <input
            className="search__hero"
            type="text"
            placeholder="What are you looking for?"
          />
          <FontAwesomeIcon
            className="icon__search__hero"
            icon={faMagnifyingGlass}
          />
        </div>
      </div>

      <div className="allicon__hero">
        <FontAwesomeIcon className="fa-heart" icon={faHeart} />
        <a href="/clientPage/cart">
          {" "}
          <FontAwesomeIcon
            className="fa-shopping-cart"
            icon={faShoppingCart}
            style={{ fontSize: "16px", color: "black" }}
          />
        </a>
        <div className="user__icon" >
        <a href="/productHistory">
          <FontAwesomeIcon className="icon__user__hero" icon={faUser} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
