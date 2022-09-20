import React from "react";
import myProfile from "../assets/my-profile.svg";
import ashutosh from "../assets/Ashutosh.jpg";
const AboutMe = () => {
  return (
    <div id="about-me" className="about-me-container">
      <p className="about-me-head"> About Me</p>
      <div className="about-me-card">
        <div className="my-image">
          <img className="my-image-p" src={ashutosh} />
        </div>
        <p className="my-description">
          I'm a web developer with a focus on the MERN stack, but still
          exploring other technologies and frameworks that catch my interest! if
          you're looking for a developer to add to your team, I'd love to hear
          from you!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
