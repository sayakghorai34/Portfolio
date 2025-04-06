
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
// import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", textJustify: "auto", fontSize: 18 }}>
          {props.description}
        </Card.Text>
        <div className="button-container">
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
            >
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="button-spacing"
            >
              <CgWebsite /> &nbsp;
              {props.isDoc ? "Read Research" : "Demo"}
            </Button>
          )}

          {props.kaggleLink && (
            <Button
              variant="primary"
              href={props.kaggleLink}
              target="_blank"
              className="button-spacing"
            >
              <FaKaggle /> &nbsp;
              {"Kaggle"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;