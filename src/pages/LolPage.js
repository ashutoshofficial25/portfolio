import React from "react";
import { Container } from "react-bootstrap";
import thanyouImg from "../assets/thankyou.svg";

const LolPage = () => {
  return (
    <Container className="thankyou-page text-white" fluid>
      <img src={thanyouImg} />
      <h1> LOL !</h1>
      <p>If you want to keep your personal life private then, </p>
      <p>Please respect others privecy also! </p>
      <p>Close this window! do your work</p>
    </Container>
  );
};

export default LolPage;
