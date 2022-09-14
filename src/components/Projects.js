import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import estyIndia from "../assets/projects/esty-india.png";
import visitNewLocation from "../assets/projects/visit-new-location.png";
import todoApp from "../assets/projects/todo-app.png";

const Projects = () => {
  const cardData = [
    {
      name: "",
      subName: "",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="project-section bg-secondary" id="projects">
      <Container fluid>
        <h1 className="text-center">Projects</h1>

        <Row className="justify-content-center p-5">
          <Col lg={4} xl={4} md={6} sm={6} xs={12} className="project-col  p-3">
            <h4 className="projectTitle">
              Easy India <span>1st page</span>
            </h4>
            <a href="https://esty-india.netlify.app/" target="_blank">
              <div className="cardProject">
                <img src={estyIndia} className="d-block w-100" alt="..." />
              </div>
            </a>
          </Col>

          <Col lg={4} xl={4} md={6} sm={6} xs={12} className="project-col  p-3">
            <h4 className="projectTitle">
              Visit new location <span>(Natours-clone)</span>
            </h4>
            <a href="https://visitnewlocation.netlify.app/" target="_blank">
              <div className="cardProject">
                <img
                  src={visitNewLocation}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </a>
          </Col>

          <Col lg={4} xl={4} md={6} sm={6} xs={12} className="project-col  p-3">
            <h4 className="projectTitle">
              Todo-App <span>(Next-js)</span>
            </h4>
            <a href="https://todowebapp.vercel.app/" target="_blank">
              <div className="cardProject">
                <img src={todoApp} className="d-block w-100" alt="..." />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
