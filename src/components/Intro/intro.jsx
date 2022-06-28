import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./intro.css";
import "./typewriter";
import ReactVivus from "react-vivus";
import svg from "./ramsvg.svg";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <Container expand="lg" className=" outercontainer testdiv">
        <Col
          className="wrapper testdiv"
          lg="5"
          xs="10"
          md={{ span: 4, offset: 4 }}
        >
          <Col className="wavetext testdiv">
            <span className="hitext">Hi,</span>
            <span className="wave">👋</span>{" "}
            <span className="mynameis">my name is </span>
          </Col>
          <Col className="nametext testdiv">
            <ReactVivus
              id="ram"
              option={{
                file: svg,
                animTimingFunction: "EASE_IN_BOUNCE",
                type: "oneByOne",
                duration: 2000,

                onReady: console.log,
              }}
              // style={{ height: "100px", width: "100px" }}
              callback={console.log}
            />
          </Col>
          <Col className="typewriter testdiv">
            <span>I'm </span>
            <span
              href=""
              className="typewrite"
              data-period="500"
              data-type='[  "Creative.", " a Ui/Ux Designer.", "a Web Developer &#123;&#125;." ]'
            >
              <span class="wrap"></span>
            </span>
          </Col>
          <Col className="aboutmetext testdiv">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="linkedin"/>
            <img src="https://img.icons8.com/fluency/48/000000/github.png" className="github"/>
          </Col>
        </Col>
        {/* <Col className="bodytag" md={{ span: 2, offset: 2 }}>
          &lt;body&gt;
        </Col> */}
      </Container>
    </>
  );
};

export default Intro;
