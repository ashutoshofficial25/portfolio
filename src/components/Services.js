import React from "react";

import { motion } from "framer-motion";

//Asset Imports
import webImg from "../assets/services/web.svg";

const Services = () => {
  return (
    <div id="services" className="our-services">
      <div className="service-head">
        <p>Our Services</p>
      </div>
      <div className="card-group">
        <motion.span
          className="service-card"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head">Web App Development</div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </motion.span>

        <motion.span
          className="service-card"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head text-center">
            Website Design/Development
          </div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </motion.span>

        <motion.span
          className="service-card"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img className="img-1" src={webImg} alt="web-app" />

          <div className="card-head">Responsive Design</div>
          <p className="card-text">
            We have dedicated team of professional designers and developers,
            creating powerful and engaging websites. We believe that a good
            online presence starts with a great website.
          </p>

          <button className="card-btn">view apps</button>
        </motion.span>
      </div>
    </div>
  );
};

export default Services;
