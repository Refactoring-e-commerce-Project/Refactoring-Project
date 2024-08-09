"use client";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

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

function Electronics() {
  const [electronics, setElectronics] = useState<Electronic[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/getAll")
      .then((res) => {
        const products = res.data as Electronic[];

        const filteredProducts = products.filter(
          (elec) => elec.Category.categoryName === "mode"
        );
        setElectronics(filteredProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="header__seller__page" style={{ marginTop: "90px" }}>
        <div className="title__seller__page">
          <div className="red_mark__seller"></div>
          <span className="space__seller">Beauty test</span>
        </div>
        <div className="img__container">
          <img
            className="img__seller"
            src="https://img.freepik.com/premium-photo/showcase-electronic-items-black-background_893571-15169.jpg"
            alt="Showcase Electronic Items"
          />
          <img
            className="img__seller"
            src="https://techeconomy.ng/wp-content/uploads/2023/12/The-Most-Popular-Phone-Brands-in-Every-Country-in-2023.jpg"
            alt="Popular Phone Brands"
          />
          <img
            className="img__seller"
            src="https://cdn.firstcry.com/education/2022/11/13120532/Summer-Clothes-Vocabulary-in-English-for-Kids.jpg"
            alt="Summer Clothes Vocabulary"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8e8EcPd0qv7NmXbLz5PTDyoKyAF2NVN_8Q&s"
            alt="Item 1"
          />
          <img
            className="img__seller"
            src="https://thegloss.ie/wp-content/uploads/2024/05/ms-beauty-bag.jpg"
            alt="Beauty Bag"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zeL8Pn9RcaPoHP_ewChKkRakyCdVDEfXUA&s"
            alt="Item 2"
          />
          <img
            className="img__seller"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6bccm_FGkAfz7_EU_xZ96cd-EvDv7MCz3A&s"
            alt="Item 3"
          />
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
                  <p className="grey__star">⭐</p>
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

export default Electronics;
