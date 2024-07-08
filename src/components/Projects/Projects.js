import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/CNN_FERS.png";
import peermeet from "../../Assets/Projects/PeerMeet.png";
import iot from "../../Assets/Projects/IoT.png";
import librarymanager from "../../Assets/Projects/LibraryManager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peermeet}
              title="PeerMeet"
              description="An easy-to-use video conferencing tool for virtual meetings. Enjoy high-quality video and audio with minimal delays. Key features include real-time chat, screen sharing, Picture-in-Picture (PiP) mode, cloud meeting recording, and simple invitations. Built with React.js, Tailwind CSS, Node.js, Express.js, and WebRTC, this tool offers a reliable and professional solution for all your online meeting needs."
              ghLink="https://github.com/sayakghorai34/PeerMeet"
              demoLink="https://sg34-peermeet.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={librarymanager}
              title="Library Manager"
              description="A simple Library Management tool for librarians that allows them to add, delete, and update books, authors, borrowers/users in the database. They can also checkin-checkout books with borrowers, generate borrowing receipt etc.. Built with React.js, tailwind css, Node.js, Express.js, and MongoDB, this tool offers a user-friendly interface for librarians to manage their library efficiently."
              ghLink="https://github.com/sayakghorai34/Library-Management-System"
              demoLink="https://sg34-library-manager.netlify.app/"
            />
          </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isDoc={true}
              title="Human Face Emotion Detection"
              description="In this research, we used Convolutional Neural Networks (CNN) to recognize facial expressions. Our developed from scratch CNN achieved 62% accuracy on the FER2013 dataset after several fine tuning. We also studied other datasets, found limitations, and tried Residual and Parallel blocks. We used Python, TensorFlow, Keras, and Scikit-learn in this research."
              demoLink="https://docs.google.com/document/d/1zoatTJJlP62_879YzY3hZ83zJbL4VFEaGktIoh-GeM8/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isDoc={true}
              title="IoT Based Healthcare System"
              description="We created an IoT-based healthcare system for remote patient monitoring. Patients and doctors have their own dashboards, allowing patients to update health data and doctors to monitor and chat with them in real time. The system uses sensors to measure SpO2, heart rate, and body temperature, sending this data to the doctor via a cloud database. Technologies used include NodeMCU, Arduino Uno, JavaFX, MySQL, and various sensors."
              demoLink="https://docs.google.com/document/d/12igc7Mr_pgR4XFhPBsG6lcbrY0LrM1Tl9ZFhBAh1Kc8/edit?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
