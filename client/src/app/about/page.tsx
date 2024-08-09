'use client'
import React from 'react';
import './about.css';
import Image from 'next/image';


import { FaShippingFast, FaHeadset, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoMdPeople, IoMdCart, IoMdStats, IoMdPricetag } from 'react-icons/io';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

 


const About = () => {
  return (
    <div className="app   ">

<div className="breadcrumb">
      <a href="/" className="breadcrumb-link">Home</a>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-current">About</span>
    </div>



<div className="our-story-container">
      <div className="our-story">
        <h1>Our Story</h1>

         
<div className='paragraph'>
  <p>
    Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
  </p>
  <p className="extra-space">
    Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
  </p>
</div>





      </div>
      <div className="big-story">
<<<<<<< HEAD
        <img src='{img}' alt="story-big" />
=======
        {/* <img src='{img}' alt="story-big" /> */}
        <Image
                            src="/assets/ImageAbout.webp"
                            alt="our story "
                            width={900}
                            height={600}
                        />
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
      </div>
    </div>



   

<div className="statistics-section">

      <div className="stat-item">
        <IoMdPeople className="stat-icon" />
        <p className="stat-number">10.5k</p>
        <span className="stat-description">Sellers active in our site</span>
      </div>
      <div className="stat-item highlight">
        <IoMdCart className="stat-icon" />
        <p className="stat-number">33k</p>
        <span className="stat-description">Monthly Product Sale</span>
      </div>
      <div className="stat-item2">
        <IoMdStats className="stat-icon" />
        <p className="stat-number">45.5k</p>
        <span className="stat-description">Customer active in our site</span>
      </div>
      <div className="stat-item3">
        <IoMdPricetag className="stat-icon" />
        <p className="stat-number">25k</p>
        <span className="stat-description">Annual gross sale in our site</span>
      </div>
    </div>




      <section className="team">

        <div className="team-member">
          <img src='{img1}' alt="Tom Cruise" />
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <div className="social-media-icons">
        <a href='{twitter}' target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href='{instagram}' target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href='{linkedin}' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>



        </div>



        <div className="team-member">
          <img src='{img2}' alt="Emma Watson" />
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <div className="social-media-icons">
        <a href='{twitter}' target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href='{instagram}' target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href='{linkedin}' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
        </div>



        <div className="team-member">
          <img src='{img3' alt="Will Smith" />
          <h3>Will Smith</h3>
          <p>Product Designer</p>

          <div className="social-media-icons">
        <a href='twitter}' target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href='{instagram}' target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href='{linkedin}' target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
          
        

        </div>

        

        
      </section>


      <div className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot active"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>




 <div className="features-section">
      <div className="feature-item">
        <FaShippingFast className="feature-icon" />
        <p className="feature-title">FREE AND FAST DELIVERY</p>
        <span className="feature-description">Free delivery for all orders over $140</span>
      </div>
      <div className="feature-item">
        <FaHeadset className="feature-icon" />
        <p className="feature-title">24/7 CUSTOMER SERVICE</p>
        <span className="feature-description">Friendly 24/7 customer support</span>
      </div>
      <div className="feature-item">
        <FaMoneyCheckAlt className="feature-icon" />
        <p className="feature-title">MONEY BACK GUARANTEE</p>
        <span className="feature-description">We return money within 30 days</span>
      </div>
    </div> 




    </div>
  );
};

export default About;