import React from "react";
import "./index.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import trackier_white from "../../../assets/trackier-white.png";
import trackier_black from "../../../assets/trackier-black.webp";
import cx from "classnames";
import useHeader from "./useHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const { scroll } = useHeader();
  return (
    <Navbar expand="lg" className={cx({ "box-shadow scroll_navbar": scroll })}>
      <Container className="d-flex justify-content-between">
          <a href="https://trackier.com/" target='_blank' rel='noreferrer'>
            {" "}
            {scroll ? (
              <img
                src={trackier_white}
                alt="trackier"
                className="trackier_logo"
              />
            ) : (
              <img
                src={trackier_black}
                alt="trackier"
                className="trackier_logo"
              />
            )}
          </a>
          <div className="d-flex align-items-center">
            <p className="mb-0 me-2 d-none d-md-block mt-2">| Deep Linking Simulator</p>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/" data-scroll-nav="1">
              Home
            </Link>
            <Link className="nav-link" to="/" data-scroll-nav="2">
              Products
            </Link>
            <Link className="nav-link" to="/" data-scroll-nav="3">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
