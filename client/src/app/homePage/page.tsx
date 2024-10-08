"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faMobileScreenButton,
  faFootballBall,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import Exclusive from "../exclusive/page";
import "./home.css";
import FlashSales from "../flashSlaes/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  productname: string;
  images: string[];
  description: string;
  price: number;
  availability: Boolean;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  Category: number;
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [ref, setref] = useState<Boolean>(false);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/getAll")
      .then((res) => {
        console.log("hhhh5", res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleClickElec = () => {
    router.push("/electronics");
  };
  const handleClickBeauty = () => {
    router.push("/beauty");
  };
  const handleClickSports = () => {
    router.push("/sports");
  };
  
  const handleClickMode = () => {
    router.push("/mode");
  };
  

  return (
    <div>
      <div>
        <Exclusive />
        <hr />
        <FlashSales />
        <hr />
      </div>

      <div className="categories__home">
        <div className="red__categories">
          <div className="red__mark__categorie"></div>
          <div className="categories">Categorie</div>
        </div>
        <div className="categories__product__home ">Browse By Category</div>
        <div className="all__icon__home">
          {/* 1st icon */}
          <div className="icon__home__container" onClick={handleClickElec}>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon-with-border icon__phone"
            />
            <p>Electronics</p>
          </div>
          {/* 2nd icon */}
          <div className="icon__home__container" onClick={handleClickSports}>
            <FontAwesomeIcon
              icon={faFootballBall}
              className="icon-with-border icon__sports"
            />
            <p>Sports</p>
          </div>

          {/* 3nd icon */}
          <div className="icon__home__container" onClick={handleClickBeauty}>
            <FontAwesomeIcon
              icon={faHeart}
              className="icon-with-border icon__beauty"
            />
            <p>Beauty</p>
          </div>
          {/* 4nd icon */}
          <div className="icon__home__container" onClick={handleClickMode}>
            <FontAwesomeIcon
              icon={faTshirt}
              className="icon-with-border icon__fashion"
            />
            <p>Fashion</p>
          </div>
        </div>
      </div>
      <div className="header__home__container">
        <div className="header__home">
          <div className="red_mark__home"></div>
          <p className="our__product__home ">Explore Our Products</p>
        </div>
      </div>

      <div className="Home__container">
        {products.slice(0, visibleCount).map((product, index) => (
          // link place
          <div key={index} className="second__sales__container">
            <div className="icon__sales ">
              <div className="image__pourcentage__sales">
                <div className="poucentage__sales">-40%</div>
                <img className="img__sales" src={product.images[0]} />

                <div className="icons">
                  <FontAwesomeIcon icon={faHeart} className=" icon__heart " />
                  <FontAwesomeIcon icon={faEye} className="icon__eye" />
                </div>
              </div>
            </div>

            <div className="detail__sales">
              <span className="HAVIT__sales">{product.productname}</span>

              <span className="price__details">{product.price}$ </span>
              <div className="allStars">
                <span className="star">⭐⭐⭐⭐</span>
                <p className="grey__star">⭐</p>
              </div>
              <button className="btn__home">Add to Cart</button>
            </div>
          </div>
          // End link
        ))}
      </div>
      {products.length > visibleCount && (
        <button
          onClick={showMore}
          className="btn__showMore"
          style={{ marginBottom: "30px" }}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Home;
