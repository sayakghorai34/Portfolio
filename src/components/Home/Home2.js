import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn,FaKaggle } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I started programming on 2021 and so far I can see I have improved quite a bit🤷‍♂️
              <br />
              <br />I am comfortable with
              <i>
                <b className="purple"> Python, Java and Javascript. </b>
              </i>
              <br />
              <br />
              I love to spend time on building new &nbsp;
              <i>
                <b className="purple">Web Applications </b> and
                also explore and develop in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence, Machine Learning, Deep Learning and
                  Computer Vision.
                </b>
              </i>
              <br />
              <br />
              Mostly I build backends using <b className="purple">Express.js, Node.js</b> and use 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b> for frontend development.
              </i>
              <br/>
              <br/>
              <i>
                <b className="purple">Python and Jupyter notebook</b> is my go to for Machine Learning and Deep Learning projects.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="profile" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sayakghorai34"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sayak-ghorai-aab0a9211/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/sayakghorai34"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaKaggle />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:sayakghorai34@gmail.com?subject=Conversation%20on%20Jobs&body=Hello%20Sayak%252C%0AI%20would%20like%20to%20talk%20about..."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+917063197944"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlinePhone />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
