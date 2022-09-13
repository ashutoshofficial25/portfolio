import React from "react";

import webImg from "../web-app.svg";

const Services = () => {
  return (
    <div id="services" className="our-services">
      <div className="service-head">
        <p>Our Services</p>
      </div>
      <div className="card-group">
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head">Web Development</div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </div>
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head">Web Development</div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </div>
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head">Web Development</div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
