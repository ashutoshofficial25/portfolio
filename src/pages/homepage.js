import React from "react";
import Services from "../components/Services";
import Tools from "../components/Tools";
import AboutMe from "../components/AboutMe";
import ContactUs from "../components/ContactUs";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Tools />
      <Services />
      <AboutMe />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default Homepage;
