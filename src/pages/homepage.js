import React from "react";
import TopNav from "../components/TopNav";
import Services from "../components/Services";
import Tools from "../components/Tools";
import AboutMe from "../components/AboutMe";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
const Homepage = () => {
  return (
    <div>
      <TopNav />
      <Tools />
      <Services />
      <AboutMe />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
