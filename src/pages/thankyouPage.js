import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ThankyouPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <Container className="thankyou-page bg-dark text-white" fluid>
      <h1> Thankyou !</h1>
      <p>My team will get you soon!..</p>

      <Button variant="outline-secondary" onClick={goBack}>
        Go Back
      </Button>
    </Container>
  );
};

export default ThankyouPage;
