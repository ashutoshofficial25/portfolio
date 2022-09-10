import React from "react";
import TopNav from "../components/TopNav";
import Services from "../components/Services";
import Tools from "../components/Tools";
import AboutMe from "../components/AboutMe";
const Homepage = () => {
  return (
    <div>
      <TopNav />
      <Tools />
      <Services />
      <AboutMe />
    </div>
  );
};

export default Homepage;
