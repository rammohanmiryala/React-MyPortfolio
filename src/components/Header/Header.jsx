import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../assets/logologo3.png";
import "./hover.js"

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
      <Container className="navContainer">
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} width="50%" alt="Ram" className="logoimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <a href="#Myself" className="itemSpacing " id="myselfnav">
              Myself
            </a>
            <a href="#MyWork" className="itemSpacing">
              MyWork
            </a>
            <a href="#Reachme" className="itemSpacing">
              Reach me
            </a>
          </Nav>
          <Nav>
            <button type="button" className="resumeButton">
              Resume
            </button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigationbar;
