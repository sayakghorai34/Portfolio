import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Sayak Ghorai</span> from{" "}
            <span className="purple">Kolkata, India</span>.
            <br /><br />
            I'm fascinated by the intersection of technology and real-world problem solving. 
            My journey in tech has been driven by curiosity and a desire to create impactful solutions.
            <br/><br/>
            🎓 I'm pursuing my BTech in Computer Science student at{" "}
            <span className="purple">NIIT University, Neemrana</span>
            <br/>
            💼 Currently interning at
            <span className="purple"> GE Appliances</span>, Bangalore
            <br /><br/>
            💡 Passionate about:
            <ul className="about-interests">
              <li>Machine Learning</li>
              <li>Backend Development</li>
              <li>Problem Solving</li>
            </ul>
            <br />
            🎵 When not coding, you'll find me:
          </p>
          <ul className="about-activity">
            <li>
              <ImPointRight /> Playing Guitar & Singing
            </li>
            <li>
              <ImPointRight /> Capturing Moments through Photography
            </li>
            <li>
              <ImPointRight /> Reading Stories
            </li>
            <li>
              <ImPointRight /> Exploring New Places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
