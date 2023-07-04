import React from "react";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

const Footer = () => {
  return (
    <div style={{ background: "black" }}>
      <div className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "'Alata', sans-serif",
              fontSize: "30px",
            }}
          >
            loopstudios
          </p>
          <span
            id="footer-links"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          >
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "35px",
          }}
        >
          <span className="social-media">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </span>
          <span>
            <p> &copy;2021Loopstudios. All rights reserved.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
