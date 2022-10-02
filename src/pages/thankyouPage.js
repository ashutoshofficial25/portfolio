import React from "react";

//Package Imports
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Asset Imports
import thanyouImg from "../assets/thankyou.svg";

const ThankyouPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <Container className="thankyou-page text-white" fluid>
      <img src={thanyouImg} />
      <h1> Thankyou !</h1>
      <p>My team will get you soon!..</p>

      <Button variant="outline-secondary" onClick={goBack}>
        Go Back
      </Button>
    </Container>
  );
};

export default ThankyouPage;
