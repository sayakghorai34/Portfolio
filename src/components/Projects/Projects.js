import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/CNN_FERS.png";
import peermeet from "../../Assets/Projects/PeerMeet.png";
import iot from "../../Assets/Projects/IoT.png";
import librarymanager from "../../Assets/Projects/LibraryManager.png";
import wifi_csi from "../../Assets/Projects/Wifi_CSI.png";
import dcgan from "../../Assets/Projects/DCGAN.png";
import laneDetection from "../../Assets/Projects/LaneDetection.png";

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
              description="An easy-to-use video conferencing tool for virtual meetings. Enjoy high-quality video and audio with minimal delays. Key features include real-time chat, screen sharing, Picture-in-Picture (PiP) mode, cloud meeting recording, and simple invitations. Built with React.js, Tailwind CSS, Node.js, Express.js, and WebRTC."
              ghLink="https://github.com/sayakghorai34/PeerMeet"
              demoLink="https://sg34-peermeet.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={librarymanager}
              title="Library Manager"
              description="A Library Management tool for librarians allowing them to manage books, authors, borrowers, and check-ins/outs efficiently. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/sayakghorai34/Library-Management-System"
              demoLink="https://sg34-library-manager.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isDoc={true}
              title="Human Face Emotion Detection"
              description="Using CNNs, this project recognizes facial expressions. Achieved 63% accuracy on the FER2013 dataset and 68% on AffectNet. The project used Python, TensorFlow, and Keras."
              demoLink="https://docs.google.com/document/d/1zoatTJJlP62_879YzY3hZ83zJbL4VFEaGktIoh-GeM8/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wifi_csi}
              title="Human Activity Recognition using WiFi CSI"
              description="Developed a machine learning model for classifying human activities using WiFi Channel State Information (CSI) data. Achieved 95% accuracy using an LSTM network. Built with Python, TensorFlow, and Keras."
              ghLink="https://github.com/sayakghorai34/HAR-using-CSI.git"
              kaggleLink="https://www.kaggle.com/code/sayakghorai34/csi-har-notebook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dcgan}
              title="DCGAN Implementation"
              description="Implemented Deep Convolutional GANs from scratch in PyTorch. First tested on the MNIST dataset, then expanded to the CelebA dataset."
              kaggleLink="https://www.kaggle.com/code/sayakghorai34/dcgan-rgb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laneDetection}
              title="Real-Time Lane Detection"
              description="Built a real-time lane detection system using Canny Edge Detection and Hough Transform. The system processes a 27-second 720p video (50 FPS) in 35 seconds."
              ghLink="https://github.com/sayakghorai34/Real_Time_Lane_Detection.git"
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
