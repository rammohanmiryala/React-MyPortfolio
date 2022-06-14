import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./intro.css";
import "./typewriter"

const Intro = () => {
  return (
    <>
      <Container expand="lg" className="justify-content-md-center mainbodydiv">
        <Col className="bodytag" md={{ span: 2, offset: 2 }}>
          &lt;body&gt;
        </Col>
        <Col className="justify-content-md-center introbody" lg="8">
          <Col className="justify-content-md-center tagtext" lg="10">
            <Col className="wavetext">
              <span className="hitext">Hi,</span>
              <span className="wave">👋</span> <span className="mynameis">my name is </span>
            </Col>
            <Col className="nameletter">
              <Col className="nameletterdiv">
                <span className="Rletter">R</span>
                <span className="amletter">am</span>
                <span className="dotsletter">..</span>
              </Col>
            </Col>
            <Col className="designertext ">
              <span>I'm  </span> <span></span><span
                href=""
                className="typewrite"
                data-period="2000"
                data-type='[  "Creative.", " a Ui/Ux Designer.", "a Developer &#123; &#125;." ]'
              >
                <span class="wrap"></span>
              </span>
            </Col>
            <Col className="aboutmetext" lg="11">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, appealing websites, web services
              and online stores.
            </Col>
          </Col>
        </Col>
        <Col className="bodytag" md={{ span: 2, offset: 2 }}>
          &lt;body&gt;
        </Col>
      </Container>
    </>
  );
};

export default Intro;
