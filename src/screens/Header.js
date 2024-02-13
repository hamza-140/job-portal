import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SocialIcon } from "react-social-icons";
import NavBar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "965px",
};
const socialIcons = [
  { url: "https://facebook.com" },
  { url: "https://twitter.com" },
  { url: "https://instagram.com" },
  { url: "https://linkedin.com" },
];

const slideImages = [
  {
    url: "https://react.codezion.com/themes/tm/oneline/assets/images/banners-2.jpeg",
    caption: "Slide 1",
  },
  {
    url: "https://react.codezion.com/themes/tm/oneline/assets/images/banners-6.jpeg",
    caption: "Slide 2",
  },
  {
    url: "https://react.codezion.com/themes/tm/oneline/assets/images/banners-5.jpeg",
    caption: "Slide 3",
  },
];
const Header = () => {
  const navigate = useNavigate();
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
                  margin: "10px 10px 10px 0",
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
          <Link to="Login" style={{ textDecorationLine: "none" }}>
            <div style={title}>Apply Now</div>
          </Link>
        </div>
      </div>
      <div style={header2}>
        <div style={headerContainer}>
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "200px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "rgb(38, 59, 214)", fontSize: "25px" }}>
              Job
            </span>{" "}
            Portal
          </div>
          <div style={{ marginRight: "200px" }}>
            <NavBar></NavBar>
          </div>
        </div>
      </div>
      <Slide>
        {slideImages.map((slideImages, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImages.url})`,
              }}
            >
              <div>
                <h1 style={sliderContent}>
                  DISCOVER A NEW{" "}
                  <span style={{ color: "rgb(38, 59, 214)" }}>CAREER</span>{" "}
                  DESIGNED FOR YOU!
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
  marginRight: "200px",
};
const socials = {
  fontFamily: "Open Sans",
  display: "flex",
  height: "57px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "600",
  color: "#fff",
  width: "150px",
  marginLeft: "200px",
};

const header = {
  color: "white",
  backgroundColor: "#333",
};
const header2 = {
  color: "white",
  backgroundColor: "white",
};
