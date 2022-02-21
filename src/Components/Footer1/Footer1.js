import React from "react";
import "./Footer1.css";
import Mainlogo from "../../Assets/Mainlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer1 = () => {
  return (
    <footer class="footer">
      <div class="l-footer">
        <h1>
          <img className="footer_logo" src={Mainlogo} alt="" />
        </h1>
        <p>
          To construct any building (Project), we need to go to 2 different
          contractors and builders. Let's Build is a platform where users share
          their project experiences and descriptions.
        </p>
        <div className="footer-colomn">
          <h4>Follow Us</h4>
          <div className="social-links">
            <li>
              <a href="https://www.youtube.com/LetsBuild">
                <FontAwesomeIcon
                  className="youtube"
                  icon={faYoutube}
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  className="facebook"
                  icon={faFacebook}
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FontAwesomeIcon
                  className="twitter"
                  icon={faTwitter}
                  size="2x"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon
                  className="instagram"
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </li>
          </div>
        </div>
      </div>
      <ul class="r-footer">
        <li>
          <h2>LetsBuild</h2>
          <ul class="box">
            <li>
              <a href="About US">About US</a>
            </li>
            <li>
              <a href="Offers">Offers</a>
            </li>
            <li>
              <a href="Pricing">Pricing</a>
            </li>
            <li>
              <a href="Benifits">Benifits</a>
            </li>
            <li>
              <a href="Careers">Careers</a>
            </li>
            <li>
              <a href="Refer and Earn">Refer and Earn</a>
            </li>
            <li>
              <a href="Site map">Site map</a>
            </li>
          </ul>
        </li>
        <li class="features">
          <h2>Information</h2>
          <ul class="box h-box">
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#sales">Sales</a>
            </li>
            <li>
              <a href="#tickets">Tickets</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
            <li>
              <a href="#service">Customer Service</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Support</h2>
          <ul class="box">
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#contract">Contract Us</a>
            </li>
            <li>
              <a href="#contract">FAQs</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="b-footer">
        <p>All rights reserved by ©CompanyName 2020 </p>
      </div>
    </footer>
  );
};

export default Footer1;
