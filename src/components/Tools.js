import React from "react";
import Slider from "react-slick";
import html from "../assets/skills/htmlcssjs.svg";
import next from "../assets/skills/nextjs.svg";
import reactImg from "../assets/skills/react.svg";
const Tools = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <div className="tool-container">
      <div>
        {" "}
        <p className="tool-test">My skills</p>{" "}
      </div>
      <div>
        <Slider {...settings}>
          <img className="tool-img" src={html} />

          <img className="tool-img" src={next} />

          <img className="tool-img" src={reactImg} />
          <img className="tool-img" src={next} />
          <img className="tool-img" src={html} />
          <img className="tool-img" src={reactImg} />
        </Slider>
      </div>
    </div>
  );
};

export default Tools;
