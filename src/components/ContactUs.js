import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import instaIcon from "../assets/socials/insta.png";
import twitterIcon from "../assets/socials/twitter.png";
import linkedInIcon from "../assets/socials/linkedin.png";
import gitIcon from "../assets/socials/git.png";

const ContactUs = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      navigate("/thankyou");
    }

    setValidated(true);
  };

  return (
    <div id="contact-me" className="contact-container">
      <Container fluid="md">
        <Row>
          <Col md={5} className="p-5 mt-3">
            <p className="text-center fs-3 mb-5">Get In Touch</p>

            <p className="fs-5">
              {" "}
              Use this information to contact us or to Visit us.
            </p>

            <p>
              {" "}
              <a
                href="https://ashutosh-maurya.netlify.app/"
                className="site-link"
              >
                {" "}
                ashutosh-maurya.netlify.app
              </a>
              <br />
              Indira-Nagar Lucknow,
              <br />
              Uttar Pradesh India 226016.
            </p>

            <p>
              Email: - ashutohsm9695@gmail.com
              <br />
              Phone: - +91-9695734655
            </p>

            <p>
              {" "}
              Follow us on social media to get updates about our new Projects
              and Designs : -
            </p>

            <div className="social-links p-3">
              <a href="https://github.com/ashutoshofficial25/" target="_blank">
                <img src={gitIcon} className="social-icon git" alt="git" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-maurya-a996931a5"
                target="_blank"
              >
                <img
                  src={linkedInIcon}
                  className="social-icon linkedin"
                  alt="linkedIn"
                />
              </a>
              <a
                href="https://twitter.com/Ashutos80172936?t=imEBNXgLafp3oT7i864dEg&s=09"
                target="_blank"
              >
                <img
                  src={twitterIcon}
                  className="social-icon twitter"
                  alt="twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/ashutosh_official_25/?hl=en"
                target="_blank"
              >
                <img
                  src={instaIcon}
                  className="social-icon insta"
                  alt="insta"
                />
              </a>
            </div>
          </Col>
          <Col md={{ span: 5, offset: 2 }} className="p-5">
            <p className="text-center">Contact me</p>

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              // action="https://formsubmit.co/carrierleiten@gmail.com"
              // method="POST"
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />

                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>

                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile-Number"
                  placeholder="Enter mobile number"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your number with anyone else.
                </Form.Text>

                <Form.Control.Feedback type="invalid">
                  Please enter a valid mobile number
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  as="textarea"
                  rows={6}
                  placeholder="Enter your message"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a a message to understand your requirement!
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
