import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
          <Col md={5} className="p-5">
            <p className="text-center">Get in touch</p>
            <h2 className="text-center">Available Soon. . .</h2>
          </Col>
          <Col md={{ span: 5, offset: 2 }} className="p-5">
            <p className="text-center">Contact me</p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required />

                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
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
                  name="text"
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
