import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "20px",
  margin: "10px",
  width: "300px",
  boxShadow: "0px 0px 5px #888",
  textAlign: "center",
  color: "white",
  background: "#333",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "16px",
};

function Service() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Row>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Web Application Development</div>
            <div style={descriptionStyle}>
              I specialize in creating responsive and user-friendly web applications using the latest technologies and frameworks.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Mobile App Development</div>
            <div style={descriptionStyle}>
              I develop cross-platform mobile applications that run seamlessly on both iOS and Android devices.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Database Design and Optimization</div>
            <div style={descriptionStyle}>
              I design efficient and scalable databases, and I can optimize existing databases for better performance.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Software Architecture Consulting</div>
            <div style={descriptionStyle}>
              I provide guidance and consulting services to help you make informed decisions about your software architecture.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Code Review and Quality Assurance</div>
            <div style={descriptionStyle}>
              I conduct thorough code reviews and implement quality assurance processes to ensure bug-free and maintainable code.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Custom Software Solutions</div>
            <div style={descriptionStyle}>
              I create tailored software solutions that meet your unique business needs and goals.
            </div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 7</div>
            <div style={descriptionStyle}>Description of Service 7</div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 8</div>
            <div style={descriptionStyle}>Description of Service 8</div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 9</div>
            <div style={descriptionStyle}>Description of Service 9</div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 10</div>
            <div style={descriptionStyle}>Description of Service 10</div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 11</div>
            <div style={descriptionStyle}>Description of Service 11</div>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div style={cardStyle}>
            <div style={titleStyle}>Service 12</div>
            <div style={descriptionStyle}>Description of Service 12</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Service;
