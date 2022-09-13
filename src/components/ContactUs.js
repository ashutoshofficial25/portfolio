import React from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = () => {};

  return (
    <div className="contact-container">
      <Container fluid="md">
        <Row>
          <Col md={5} className="p-5">
            <p className="text-center">Get in touch</p>
            <h2 className="text-center">Available Soon. . .</h2>
          </Col>
          <Col md={{ span: 5, offset: 2 }} className="p-5">
            <p className="text-center">Contact me</p>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>

                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" />
                <Form.Text className="text-muted">
                  We'll never share your number with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  type="text"
                  name="text"
                  as="textarea"
                  rows={6}
                  placeholder="Enter your message"
                />
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
