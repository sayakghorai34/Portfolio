import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedinIn,FaKaggle } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      <Col md="4" className="footer-copywright">
          <h3>Developed by 
            <a href="https://github.com/soumyajit4419">Soumyajit4419</a>
            , Redesigned by Sayak Ghorai
            </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Sayak Ghorai</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sayakghorai34"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sayak-ghorai-aab0a9211/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
                <a
                  href="https://www.kaggle.com/sayakghorai34"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaKaggle />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:sayakghorai34@gmail.com?subject=Conversation%20on%20Jobs&body=Hello%20Sayak%252C%0AI%20would%20like%20to%20talk%20about..."
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+917063197944"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <AiOutlinePhone />
                </a>
              </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
