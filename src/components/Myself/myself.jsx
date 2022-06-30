import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ramcartoon from "../../assets/ram_cartoon1.png";
import { Radio, Space, Tabs } from "antd";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { useState } from "react";
import "./myself.css";
import "antd/dist/antd.css";

const { TabPane } = Tabs;
const myself = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const [size, setSize] = useState("large");

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

            {/* <Col className="skills-heading">
              Here are a few technologies I’ve been working with recently:
            </Col> */}
            <Col className="skills-tab">
              <Space style={{ marginBottom: 30, marginTop: 20,}}>
                {" "}
                {/* Here are a few technologies I’ve been working with recently:
                 */}
                 
              </Space>
              <Tabs tabPosition={tabPosition} size="large">
                <TabPane tab="User Experience" key="3" className="text15">
                  <Col className="text15 testdiv">
                    <ol>
                      <li>UI/Ux Design</li>
                      <li>Figma</li>
                      <li>Sketch</li>
                      <li>Umls</li>
                      <li>User Stories</li>
                    </ol>
                  </Col>
                </TabPane>
                <TabPane tab="Front End" key="1">
                  <Col className="text15 testdiv">
                    <ol>
                      <li>Html</li>
                      <li>Css</li>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>Responsive Design</li>
                    </ol>{" "}
                  </Col>
                </TabPane>
                <TabPane tab="Back End" key="2">
                  <Col className="text15 testdiv">
                    <ol>
                      <li>Node.js</li>
                      <li>GraphQL</li>
                      <li>NoSQL</li>
                      <li>MySQL</li>
                      <li>Webpack</li>
                    </ol>
                  </Col>
                </TabPane>
              </Tabs>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default myself;

/* <Row className="ordered-list testdiv">
              <Col className="testdiv" lg="4">
                <ol>                
                  <li>UI/Ux Design</li>
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Umls</li>
                  <li>User Stories</li>
                </ol>
              </Col>
              <Col className="testdiv" lg="5">
                <ol>
                  <li>Html</li>
                  <li>Css</li>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Responsive Design</li>
                </ol>
              </Col>
              <Col className="testdiv">
                <ol>
                  <li>Node.js</li>
                  <li>GraphQL</li>
                  <li>NoSQL</li>
                  <li>MySQL</li>
                  <li>Webpack</li>
                </ol>
              </Col>
            </Row> */
