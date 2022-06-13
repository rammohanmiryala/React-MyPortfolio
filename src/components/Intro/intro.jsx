import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./intro.css";


const MyComponent = () => {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };
};

const handleDone = () => {
  console.log(`Done after 5 loops!`);
};

export default class intro extends Component {
  render() {
    return (
      <>
        <Container
          expand="lg"
          className="justify-content-md-center mainbodydiv"
        >
          <Col className="bodytag" md={{ span: 2, offset: 2 }}>
            &lt;body&gt;
          </Col>
          <Col className="justify-content-md-center introbody" lg="8">
            <Col className="justify-content-md-center tagtext" lg="8">
              <Col className="wavetext">
                <span className="hitext">Hi,</span>
                <span className="wave">👋</span> my name is
              </Col>
              <Col className="nameletter">
                <Col className="nameletterdiv">
                  <span className="Rletter">R</span>
                  <span className="amletter">am</span>
                  <span className="dotsletter">..</span>
                </Col>
              </Col>
              <Row className="designertext App">
                Life is simple{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {/* Style will be inherited from the parent element */}
                 
                </span>
                <Col lg="auto">Ui/Ux Designer</Col>
                <Col lg="auto">& </Col>
                <Col lg="auto">Web Developer &#x7B; &#xFF5D;;</Col>
              </Row>
              <Col className="aboutmetext" lg="12">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, appealing websites, web
                services and online stores.
              </Col>
            </Col>
          </Col>
          <Col className="bodytag" md={{ span: 2, offset: 2 }}>
            &lt;body&gt;
          </Col>
        </Container>
      </>
    );
  }
}
