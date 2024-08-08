import React, { useState, useEffect } from "react";
// import ps5 from "../assets/ps5.png";

import "./flashSales.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import mob from "../assets/mob.jpeg";
// import mobile from "../assets/mobilePhone.png";

const FlashSales = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatDateTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <div className="flash__sales__container">
      <div className="header__sales">
        <div className="red_mark__sales"></div>
        <p className="today__sales ">Today's</p>
      </div>
      <div className="timer__sales  ">
        <h3 className="flash__sales">Flash Sales</h3>
        <p className="Date__sales">{formatDateTime(currentDateTime)}</p>
      </div>
      {/* first product*/}
      <div className="all__products__sales">
        <div className="second__sales__container">
          <div className="icon__sales ">
            <div className="image__pourcentage__sales">
              <div className="poucentage__sales">-40%</div>
              <img className="img__sales" src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />
                {/* <i className="fas fa-eye "></i> */}
                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">HAVIT HV-G92 Gamepad</span>
            <span className="price__details">120$</span>
            <div className="allStars">
              <span className="star">⭐⭐⭐</span>
              <p className="grey__star">⭐</p>
            </div>
          </div>
        </div>

        {/* second product */}
        <div className="second__sales__container">
          <div className="icon__sales ">
            <div className="image__pourcentage__sales">
              <div className="poucentage__sales">-40%</div>
              <img className="img__sales" src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">HAVIT HV-G92 Gamepad</span>
            <span className="price__details">120$</span>
            <div className="allStars">
              <span className="star">⭐⭐⭐</span>
              <p className="grey__star">⭐</p>
            </div>
          </div>
        </div>
        {/* third product */}
        <div className="second__sales__container">
          <div className="icon__sales ">
            <div className="image__pourcentage__sales">
              <div className="poucentage__sales">-40%</div>
              <img className="img__sales" src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">HAVIT HV-G92 Gamepad</span>
            <span className="price__details">120$</span>
            <div className="allStars">
              <span className="star">⭐⭐⭐</span>
              <p className="grey__star">⭐</p>
            </div>
          </div>
        </div>
        {/* forth product */}
        <div className="second__sales__container">
          <div className="icon__sales ">
            <div className="image__pourcentage__sales">
              <div className="poucentage__sales">-40%</div>
              <img className="img__sales" src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">HAVIT HV-G92 Gamepad</span>
            <span className="price__details">120$</span>
            <div className="allStars">
              <span className="star">⭐⭐⭐</span>
              <p className="grey__star">⭐</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn__sales">View All Products</button>
    </div>
  );
};

export default FlashSales;
