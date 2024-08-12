'use client'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./hero2.css";
import { useRouter } from "next/navigation";
import axios from'axios'
import { useCart } from '../context'; // Adjust path as needed


function Hero() {


  const router = useRouter();
  const [cartlength, setcartlength] = useState<number>()
  const userId: number = JSON.parse(localStorage.getItem("user") || '{}').id;
  const { cartLength ,setCartLength } = useCart();

// const rf =  localStorage.getItem("ref")
// const up = rf ? JSON.parse(rf) : 0
  // useEffect(() => {
  //   // Retrieve cart length from localStorage
  //   const length = localStorage.getItem("cartLength");
  //   console.log("lll",length);
    
  //   setcartlength(length ? parseInt(length, 10) :cartlength );
  // }, [up]);
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/carts/getcartbyuser/${userId}`)
    .then((res)=>{
      setcartlength(res.data.length)
    })
  },[userId,cartLength])

  const handleLogout = () => {
    localStorage.clear()
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
          <FontAwesomeIcon className="icon__search__hero" icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="allicon__hero">
        <FontAwesomeIcon className="fa-heart" icon={faHeart} onClick={()=>{router.push("/clientPage/wishlitst")}}/>
        {/* <p style={{color:'white',  alignItems: 'center', justifyContent: 'center',backgroundColor:'#db4444',borderRadius:'50%',position:'absolute',width:'14px',marginRight:'-22px',height:'16px',marginTop:'-37px'}}>1</p> */}
       <p style={{
  color: 'white',
  backgroundColor: '#db4444',
  borderRadius: '50%',
  position: 'absolute',
  width: '24px',  /* Adjusted width */
  height: '24px', /* Adjusted height */
  marginRight: '-22px',
  marginTop: '-37px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',  /* Adjusted font size for better fit */
  textAlign: 'center'
}}>{cartlength}</p>
       <a href="/clientPage/cart"> <FontAwesomeIcon className="fa-shopping-cart" icon={faShoppingCart} style={{ fontSize: "16px", color: "black" }} /></a>
        <div className="user__icon">
          <FontAwesomeIcon style={{cursor:'pointer'}} className="icon__user__hero" icon={faUser} onClick={()=>{router.push("/clientPage/h")}}/> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
