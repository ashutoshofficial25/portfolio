import React from "react";
import myProfile from "../assets/my-profile.svg";
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <p className="about-me-head"> About Me</p>
      <div className="about-me-card">
        <div className="my-description">
          I'm a web developer with a focus on the MERN stack, but still
          exploring other technologies and frameworks that catch my interest! if
          you're looking for a developer to add to your team, I'd love to hear
          from you!
        </div>
        <div className="my-image">
          <img className="my-image-p" src={myProfile} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
