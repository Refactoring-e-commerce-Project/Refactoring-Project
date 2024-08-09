
"use client";

import "./footer.css";

import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons/faCopyright";


function Footer() {
  return (
    <div>
      <div className="footer__container">
        <div className="social__media__footer">
          <div className="image__name__footer">
            <div className="name__footer__container">
              <h3 className="name__footer">Exclusive</h3>
              <span>Subscribe</span>
              <span className="span__footer__get">
                Get 10% off your first order
              </span>
              <div className="input__container">
                <input
                  type="text"
                  className="input__footer"
                  placeholder="Enter your email"
                />
                <FontAwesomeIcon icon={faPaperPlane} className="input-icon" />
              </div>
            </div>
          </div>

          <div className="icon__copyright__footer">
            <div className="icon__footer">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
        </div>

        <div className="contact__us__footer">
          <h3 className="name__footer__second">Support</h3>
          <span>
            111 Bijoy sarani, dhaka, <br /> DH 1515, bangladesh.
          </span>
          <span>exclusive@gmail.com</span>
          <span>415-201-6370</span>
        </div>
        <div className="account__footer">
          <h3 className="name__footer__second">Account</h3>
          <span>My Account</span>
          <span>Login/register</span>
          <span>cart</span>
          <span>whishlist</span>
          <span>shop</span>
        </div>
        <div className="about__us__footer">
          <h3 className="name__footer__second">Quick Link</h3>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
        <div className="resources__footer">
          <div className="social__media__icon__container">
            <h3 className="name__footer__second">Download App</h3>
            <span className="save__footer">Save S3 with App Now User Only</span>
            <div className="image__footer">
              <img
                style={{ width: "50px", height: "70px" }}
                src="/logo.png"
                alt=""
              />
              <div className="app_google__img">
              <img
                style={{ width: "80px", height: "30px" }}
                src="/app.png"
                alt=""
              />
              <img style={{ width: "100px" }} src="/google.png" alt="" />
              </div>
            </div>
            <div className="social__media__icon">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="separation" />

      <div className="copy__right__icon">
        <FontAwesomeIcon icon={faCopyright} className="icon__copy" />
        <span className="copy__right__icon__text">
          Copyright Rimel 2022. All right reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
