import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import banner2 from "../../src/assets/banners-2.jpeg";
import banner5 from "../../src/assets/banners-5.jpeg";
import banner6 from "../../src/assets/banners-6.jpeg";

const socialIcons = [
  { url: "https://facebook.com" },
  { url: "https://twitter.com" },
  { url: "https://instagram.com" },
  { url: "https://linkedin.com" },
];

const slideImages = [
  {
    url: banner2,
    caption: "Slide 1",
  },
  {
    url: banner6,
    caption: "Slide 2",
  },
  {
    url: banner5,
    caption: "Slide 3",
  },
];

const Header = ({ isLoggedIn }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      <div style={header}>
        <div style={headerContainer}>
          <div style={socials}>
            {socialIcons.map((socialIcon, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  lineHeight: "33px",
                  border:
                    hoveredIcon === index
                      ? "2px solid #263bd6"
                      : "2px solid #fff",
                  width: "36px",
                  height: "36px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: hoveredIcon === index ? "#263bd6" : "transparent",
                }}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <SocialIcon
                  bgColor="transparent"
                  fgColor="white"
                  url={socialIcon.url}
                />
              </div>
            ))}
          </div>
          {isLoggedIn ? (
            <Link to="/profile" style={{ textDecorationLine: "none" }}>
              <div style={title}>Profile</div>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecorationLine: "none" }}>
              <div style={title}>Register / Login</div>
            </Link>
          )}
        </div>
      </div>
      <div style={header2}>
        <div style={headerContainer}>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "rgb(38, 59, 214)", fontSize: "25px" }}>
              Job
            </span>{" "}
            Portal
          </div>
          <div>
            <NavBar />
          </div>
        </div>
      </div>
      <Slide>
        {slideImages.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                height: "800px", // Adjusted height for responsiveness
                backgroundImage: `url(${slide.url})`,
              }}
            >
              <div>
                <h1 style={sliderContent}>
                  DISCOVER A NEW{" "}
                  <span style={{ color: "rgb(38, 59, 214)" }}>CAREER</span>{" "}
                  DESIGNED FOR YOU
                </h1>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <a
                  href="#"
                  style={{
                    background: "#263bd6",
                    borderColor: "#263bd6",
                    color: "#fff",
                    display: "inline-block",
                    padding: "12px 40px",
                    position: "relative",
                    transition: "all .5s",
                    border: "1px solid transparent",
                    fontSize: "14px",
                    overflow: "hidden",
                    zIndex: "1",
                    textAlign: "center",
                    textTransform: "uppercase",
                    textDecorationLine: "none",
                  }}
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
};

export default Header;

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

const sliderContent = {
  color: "white",
  fontSize: "48px",
};

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const title = {
  fontFamily: "Open Sans",
  background: "#263bd6",
  display: "flex",
  height: "57px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "600",
  color: "#fff",
  width: "150px",
};

const socials = {
  fontFamily: "Open Sans",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: "600",
  color: "#fff",
  width: "auto",
};

const header = {
  color: "white",
  backgroundColor: "#333",
};

const header2 = {
  color: "black",
  backgroundColor: "white",
};
