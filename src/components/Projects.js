import React from "react";

//Packege Imports
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

//asset Imports
import estyIndia from "../assets/projects/esty-india.png";
import visitNewLocation from "../assets/projects/visit-new-location.png";
import todoApp from "../assets/projects/todo-app.png";
import iconfinder from "../assets/projects/iconfinder.png";
import inshortsNews from "../assets/projects/inshots-news.png";
import paytmWebPage from "../assets/projects/paytm-clone.png";
import myntra from "../assets/projects/myntra.png";
import blogging from "../assets/projects/blog.png";
import weather from "../assets/projects/weather-app.png";

const Projects = () => {
  //to make dynamic
  const cardData = [
    {
      name: "",
      subName: "",
      image: "",
      link: "",
    },
  ];

  return (
    <div className="project-section " id="projects">
      <Container fluid>
        <h1 className="text-center text-light p-3">Project Gallery </h1>

        <Row className="justify-content-center p-5">
          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Click & Collect <span>(Coming soon...)</span>
              </h4>
              <a
                href="https://click-n-collect-ecommerce.vercel.app/"
                target="_blank"
              >
                <div className="cardProject">
                  <img
                    src={myntra}
                    className="d-block w-100"
                    alt="click & collect"
                  />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                IconFinder <span>(Clone)</span>
              </h4>
              <a href="https://iconfinder-clone.netlify.app/" target="_blank">
                <div className="cardProject">
                  <img src={iconfinder} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Inshorts-news <span>(Clone)</span>
              </h4>
              <a href="https://inshorts-news.netlify.app/" target="_blank">
                <div className="cardProject">
                  <img src={inshortsNews} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Paytm-Web Page <span>(Clone)</span>
              </h4>
              <a href="https://paytm-cl.netlify.app/" target="_blank">
                <div className="cardProject">
                  <img src={paytmWebPage} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Blogging Web App
              </h4>
              <a href="https://blogging-hub.vercel.app/" target="_blank">
                <div className="cardProject">
                  <img src={blogging} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Weather App
              </h4>
              <a href="https://mausam-jankari.vercel.app/" target="_blank">
                <div className="cardProject">
                  <img src={weather} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
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
            </motion.span>
          </Col>

          <Col
            data-aos="fade-up"
            lg={4}
            xl={4}
            md={6}
            sm={6}
            xs={12}
            className="project-col  p-3"
          >
            <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <h4 className="projectTitle text-light text-center">
                Todo-App <span>(Next-js)</span>
              </h4>
              <a href="https://todowebapp.vercel.app/" target="_blank">
                <div className="cardProject">
                  <img src={todoApp} className="d-block w-100" alt="..." />
                </div>
              </a>
            </motion.span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
