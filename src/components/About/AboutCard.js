import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sayak Ghorai</span> from{" "}
            <span className="purple">Kolkata, India</span>.
            <br />
            I am a BTech 4th year student at NIIT University, passionate about
            Machine Learning and Web Development.
            <br />
            I enjoy backend development and have worked on several projects.
            <br />
            Besides coding, I love participating in coding competitions and
            cultural events as a singer and guitarist.
            <br />
            <br />
            Here are some of my hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Story Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
