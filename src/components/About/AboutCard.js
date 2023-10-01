import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samiya Sadiqa Fatima </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> As a software engineering student at Centennial College,
            I've been diving into various technical areas,
            from web design to database development.
            Recently, I've been exploring the world of Express.js.
            <br />
            In this portfolio, you'll see some of the projects I've worked.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Samiya Sadiqa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
