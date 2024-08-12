import React, { useState, useEffect } from "react";
// import ps5 from "../assets/ps5.png";

import "./flashSales2.css";
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
              <img className="img__sales" src="data:image/jpeg;base64,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" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">AIR JORDAN 1</span>
            <span className="price__details">100$</span>
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
              <img className="img__sales" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwsdaGlthcK1HXdwSEQRSIhDbrJ7-uLUoDw&usqp=CAU" />
              <div className="icons">
                <FontAwesomeIcon icon={faHeart} className=" icon__heart " />

                <FontAwesomeIcon icon={faEye} className="icon__eye" />
              </div>
            </div>
          </div>
          <div className="detail__sales">
            <span className="HAVIT__sales">LIVERPOOL KIT</span>
            <span className="price__details">190$</span>
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
              <img className="img__sales" src="data:image/jpeg;base64,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" />
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
