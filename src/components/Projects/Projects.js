import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/agile.jpeg";
import emotion from "../../Assets/Projects/ecommerce-website-builder.jpg";
import editor from "../../Assets/Projects/moviedb.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Agile Development"
              description="The Agile Development of an E-commerce Website project is a dynamic and customer-focused initiative aimed at creating a cutting-edge online shopping platform. The project's primary goal is to deliver a user-friendly, feature-rich e-commerce website that meets the rapidly changing needs and preferences of online shoppers."
              ghLink="https://github.com/samiya/Bits-0f-C0de"
              demoLink="https://blogs.samiya.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Database for Streaming Platform"
              description="The Movie Database for Streaming Platform project is a comprehensive database development
              initiative aimed at organizing and managing the vast library of movies
              available on the streaming platform. Leveraging SQL (Structured Query Language), this project focuses on building a robust and efficient database system to enhance the platform's user experience and content management capabilities.."
              ghLink="https://github.com/samiya/Movie_Database"
              demoLink="https://blogs.samiya.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="e-commerce Website"
              description="Designed a multi-page e-commerce website to feature a selected product. Utilized HTML and CSS to create a responsive, user-friendly interface, including an interactive banner and hotspot map of Canada
              Created an interactive slideshow using HTML, CSS and Java Scripting"
              ghLink="https://github.com/samiya/Plant_AI"
              demoLink="https://plan9-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
