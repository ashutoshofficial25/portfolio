import React from "react";

//Component Imports
import { Container } from "react-bootstrap";

//asset Imports
import notFoundImg from "../assets/not-found/404.svg";

const ErrorPage = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center pt-5 not-found-container"
      >
        <img src={notFoundImg} alt="not-found" className="p-5 not-found-img" />
      </Container>
    </div>
  );
};

export default ErrorPage;
