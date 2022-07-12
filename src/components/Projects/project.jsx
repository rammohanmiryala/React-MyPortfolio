import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Bookgif from "../../assets/book.png";
import MyDayPlanner from "../../assets/MyDayPlanner.png";
import Recipes from "../../assets/recipes.gif";
import Quiz from "../../assets/quiz.gif";
import Card from "react-bootstrap/Card";

import "./project.css";

function projects() {
  return (
    <>
      <Container className="project-outer-container ">
        <Row className=" project-text-span testdiv">
          <Col className="project-div testdiv" lg="4">
            <span className="project-text testdiv">My</span>
            <span className="project-text project-text1 testdiv">Work..</span>
            {/* <span className="project-text project-text-float testdiv">W</span>
            <span className="project-text  project-text-float testdiv">o</span>
            <span className="project-text  project-text-float testdiv">r</span>
            <span className="project-text project-text-float testdiv">k</span> */}
          </Col>
          <Col
            className="testdiv"
            style={{ backgroundColor: "#fbc93d" }}
            lg="8"
          >
            <Row className="card-bg testdiv">
              <Col className="card-div card1">
                <Card className="cards" style={{ border: "none" }}>
                  <Card.Img
                    className="card-img"
                    src={Bookgif}
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="git-icon">
                    <img
                      src="https://img.icons8.com/fluency/96/000000/github.png"
                      className="github1"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/ffffff/link--v1.png"
                      className="icons8"
                    />
                  </div>
                </Card>
              </Col>
              <Col className="card-div card2">
                <Card className="cards" style={{ border: "none" }}>
                  <Card.Img
                    className="card-img"
                    src={Recipes}
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="git-icon">
                    <img
                      src="https://img.icons8.com/fluency/96/000000/github.png"
                      className="github1"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/ffffff/link--v1.png"
                      className="icons8"
                    />
                  </div>
                </Card>
              </Col>
             
              <Col className="card3">
                <Card className="card-div cards" style={{ border: "none" }}>
                  <Card.Img className="card-img" src={MyDayPlanner} />
                  <div className="git-icon">
                    <img
                      src="https://img.icons8.com/fluency/96/000000/github.png"
                      className="github"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/ffffff/link--v1.png"
                      className="icons8"
                    />
                  </div>
                </Card>
              </Col>
              <Col className="card4">
                <Card className="card-div cards" style={{ border: "none" }}>
                  <Card.Img className="card-img" src={Quiz} />
                  <div className="git-icon">
                    <img
                      src="https://img.icons8.com/fluency/96/000000/github.png"
                      className="github1"
                    />
                    <img
                      src="https://img.icons8.com/ios/50/ffffff/link--v1.png"
                      className="icons8"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default projects;
