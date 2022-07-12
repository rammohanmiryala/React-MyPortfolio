import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./contactUs.css";

function Contact()  {
  
    return (
      <>
        {/* <div className="contactUs">
      <span className="contact">ContactUs</span>
      
      </div> */}

        <Container>
          <Col className="contactUs-outer-border">
            <Col>
              <p className="get-in-touch">Get In Touch</p>
            </Col>
            <Col>
              <p className="contacts-description">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </Col>
            <Col>
            <Button href="mailto:rammohan944@gmail.com">SAY HELLO</Button>
            </Col>
          </Col>
        </Container>
      </>
    );
  }

export default Contact;
