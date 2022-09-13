import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
        <h2 className="text-center">Working on This section</h2>

        <Row className="justify-content-center">
          <Col lg={4} xl={4} md={6} sm={6} xs={12} className="mx-auto">
            <h4 className="projectTitle">
              Project Name <span>some. some.</span>
            </h4>
            <a href="#" target="_blank">
              <div className="cardProject">
                <img src="#" className="d-block w-100" alt="..." />
              </div>
            </a>
          </Col>

          <Col lg={4} xl={4} md={6} sm={6} xs={12}>
            <h4 className="projectTitle">
              Project Name <span>some. some.</span>
            </h4>
            <a href="#" target="_blank">
              <div className="cardProject">
                <img src="#" className="d-block w-100" alt="..." />
              </div>
            </a>
          </Col>

          <Col lg={4} xl={4} md={6} sm={6} xs={12}>
            <h4 className="projectTitle">
              Project Name <span>some. some.</span>
            </h4>
            <a href="#" target="_blank">
              <div className="cardProject">
                <img src="#" className="d-block w-100" alt="..." />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
