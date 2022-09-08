import React from "react";

import webImg from "../img-1.svg";

const Services = () => {
  return (
    <div className="our-services">
      <div className="service-head">
        <h2>Our Services</h2>
      </div>
      <div className="card-group">
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />
          <div>
            <div className="card-head">Web Development</div>
            <p className="card-text">
              We have dedicated team of professional designers and developers,
              creating powerful and engaging websites. We believe that a good
              online presence starts with a great website.
            </p>
            <button>view apps</button>
          </div>
        </div>
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />
          <div>
            <div className="card-head">Web Development</div>
            <p className="card-text">
              We have dedicated team of professional designers and developers,
              creating powerful and engaging websites. We believe that a good
              online presence starts with a great website.
            </p>
            <button>view apps</button>
          </div>
        </div>
        <div className="service-card">
          <img className="img-1" src={webImg} alt="web-app" />
          <div>
            <div className="card-head">Web Development</div>
            <p className="card-text">
              We have dedicated team of professional designers and developers,
              creating powerful and engaging websites. We believe that a good
              online presence starts with a great website.
            </p>
            <button>view apps</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
