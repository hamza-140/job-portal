import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: rgb(38, 59, 214);
      cursor: pointer;
    }
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;
const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? "Close" : "Menu"}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            Home
          </a>
        </NavItem>
        <NavItem>
          <a href="/jobs" style={{ fontWeight: "500" }}>
            Jobs
          </a>
        </NavItem>
        <NavItem>
          <a href="/publish" style={{ fontWeight: "500" }}>
            Publish Job
          </a>
        </NavItem>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            About
          </a>
        </NavItem>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            Services
          </a>
        </NavItem>
        <NavItem>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-indigo-500 inline-flex items-center"
          >
            <a style={{ fontWeight: "500" }}>Contact</a>
          </Link>
        </NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }}>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            Home
          </a>
        </NavItem>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            About
          </a>
        </NavItem>
        <NavItem>
          <a style={{ fontWeight: "500" }} href="/">
            Services
          </a>
        </NavItem>
        <NavItem>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-indigo-500 inline-flex items-center"
          >
            <a style={{ fontWeight: "500" }}>Contact</a>
          </Link>
        </NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;
