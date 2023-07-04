import React from "react";
import pic from "./images/desktop/image-interactive.jpg";

const SecondSection = () => {
  return (
    <>
      <div className="second-section">
        <main>
          <span>
            <img className="vr-pic" src={pic} alt="" />
          </span>
          <span className="second-section-caption">
            <p className="ssc">THE LEADER IN INTERACTIVE VR</p>
            <p className="ssc2">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality project for some of the best companies around the
              globe, Our award winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </span>
          <div className="creations-sec">
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <p id="caption">OUR CREATIONS</p>
              <a id="see-all-btn" href="">
                SEE ALL
              </a>
            </span>
            <div className="our-creations">
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-deep-earth.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">DEEP EARTH</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-night-arcade.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">NIGHT ARCADE</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-soccer-team.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">SOCCER TEAM VR</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-grid.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption" id="grid">
                  THE GRID
                </p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-from-above.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">FROM UP ABOVE VR</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-pocket-borealis.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">POCKET BOREALIS</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-curiosity.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">THE CURIOSITY</p>
              </span>
              <span className="our-creations-pic">
                <img
                  className="our-creations-pics"
                  src={require("./images/desktop/image-fisheye.jpg")}
                  alt=""
                />
                <p className="our-creations-pics-caption">MAKE IT FISHEYE</p>
              </span>
            </div>
            <div className="our-creations-mobile">
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-deep-earth.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">DEEP EARTH</p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-night-arcade.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  NIGHT ARCADE
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-soccer-team.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  SOCCER TEAM VR
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-grid.jpg")}
                  alt=""
                />
                <p
                  id="grid-mobile"
                  className="our-creations-mobile-pics-caption"
                >
                  THE GRID
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-from-above.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  FROM UP ABOVE VR
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-pocket-borealis.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  POCKET BOREALIS
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-curiosity.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  THE CURIOSITY
                </p>
              </span>
              <span className="our-creations-mobile-pic">
                <img
                  className="our-creations-mobile-pics"
                  src={require("./images/mobile/image-fisheye.jpg")}
                  alt=""
                />
                <p className="our-creations-mobile-pics-caption">
                  MAKE IT FISHEYE
                </p>
              </span>
            </div>
            <a id="see-all-mobile-btn" href="#">
              SEE ALL
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default SecondSection;
