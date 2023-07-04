import React from "react";
import { useRef } from "react";
import hamb from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";

const FirstSection = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="first-section">
        <header>
          <div className="nav">
            <span>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "'Alata', sans-serif",
                  fontSize: "30px",
                  color: "#fff",
                }}
              >
                loopstudios
              </p>
            </span>
            <nav ref={navRef}>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Events</a>
              <a href="#">Products</a>
              <a href="#">Support</a>
              <span onClick={showNavbar} className="nav-hamb nav-hamb-close">
                <img src={close} alt="" />
              </span>
            </nav>
            <span onClick={showNavbar} className="nav-hamb">
              <img src={hamb} alt="" />
            </span>
          </div>
        </header>
        <div id="first-section">
          <p className="main-text">IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
