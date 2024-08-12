"use client";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import "./beauty.css";
import axios from "axios";

interface Category {
  categoryName: string;
}

interface Electronic {
  id: number;
  productname: string;
  images: string[];
  description: string;
  price: number;
  availability: boolean;
  userId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  Category: Category;
}

function Beauty() {
  const [electronics, setElectronics] = useState<Electronic[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/getAll")
      .then((res) => {
        const products = res.data as Electronic[];

        const filteredProducts = products.filter(
          (elec) => elec.Category.categoryName === "Beauty"
        );
        setElectronics(filteredProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log("filtred product", electronics);

  return (
    <>
      <div className="header__seller__page" style={{ marginTop: "90px" }}>
        <div className="title__seller__page">
          <div className="red_mark__seller"></div>
          <span className="space__seller">Beauty</span>
        </div>
      </div>
      <div className="Home__container">
        {electronics.length > 0 ? (
          electronics.map((elec) => (
            <div key={elec.id} className="second__sales__container">
              <div className="icon__sales">
                <div className="image__pourcentage__sales">
                  <div className="poucentage__sales">-40%</div>
                  <img
                    className="img__sales"
                    src={elec.images[0]}
                    alt={elec.productname}
                    height={150}
                    width={150}
                  />
                  <div className="icons">
                    <FontAwesomeIcon icon={faHeart} className="icon__heart" />
                    <FontAwesomeIcon icon={faEye} className="icon__eye" />
                  </div>
                </div>
              </div>
              <div className="detail__sales">
                <span className="HAVIT__sales">{elec.productname}</span>
                <span className="price__details">{elec.price}$</span>
                <div className="allStars">
                  <span className="star">⭐⭐⭐⭐</span>
                </div>
                <button className="btn__home">Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No Fashion product found.</p>
        )}
      </div>
    </>
  );
}

export default Beauty;
