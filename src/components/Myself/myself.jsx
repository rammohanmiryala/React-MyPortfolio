import React, { useState } from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ramcartoon from "../../assets/ram_cartoon1.png";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./linkactive";
import "./myself.css";
import "antd/dist/antd.css";
import Buttonlink from "./linkactive";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function Myself() {
  return (
    <div className="myselfcontainer testdiv">
      <Container>
        <Row className="myself testdiv">
          <Col className="myselfleftdiv testdiv" lg="4">
            <img
              src={Ramcartoon}
              alt="ram_cartoon"
              className="ram_cartoon testdiv"
            />
          </Col>
          {/* <Col lg="1">
          </Col> */}
          <Col className="myselfrightdiv" lg="7" md={{ span: 1, offset: 1 }}>
            <span className="myselftext testdiv">My</span>
            <span className="myselftext testdiv">Self..</span>
            <p className="aboutme testdiv">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, appealing websites, web services
              and online stores.
            </p>
            <Col>
              <Tab.Container defaultActiveKey="first">
                <Row className="skills-tab testdiv">
                  <Col sm={4} lg={4} md={4} className="text-left-div testdiv">
                    <Nav className="nav-tab testdiv">
                      <Nav.Item className="navbarItem ">
                        {" "}
                        <Nav.Link eventKey="first">
                          <button className=" button left-text testdiv">
                            {" "}
                            User Experience
                          </button>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <button className=" button left-text testdiv">
                            FrontEnd
                          </button>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <button className="button left-text testdiv">
                            BackEnd
                          </button>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={6} lg={6} md={4} className="text-right-div testdiv">
                    <Tab.Content className="right-text">
                      <Tab.Pane eventKey="first">
                        <ol>
                          <li>UI/Ux Design</li>
                          <li>Figma</li>
                          <li>Sketch</li>
                          <li>Umls</li>
                          <li>User Stories &#38; Mockups </li>
                        </ol>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {" "}
                        <ol>
                          <li>Html</li>
                          <li>Css</li>
                          <li>React</li>
                          <li>JavaScript</li>
                          <li>Bootstrap &#38; material ui</li>
                        </ol>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {" "}
                        <ol>
                          <li>Node.js</li>
                          <li>GraphQL</li>
                          <li>NoSQL</li>
                          <li>MySQL</li>
                          <li>Webpack</li>
                        </ol>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Myself;
