import React from "react";
import TopNav from "../components/TopNav";
import Services from "../components/Services";
import Tools from "../components/Tools";
import AboutMe from "../components/AboutMe";
import ContactUs from "../components/ContactUs";
const Homepage = () => {
  return (
    <div>
      <TopNav />
      <Tools />
      <Services />
      <AboutMe />
      <ContactUs />
    </div>
  );
};

export default Homepage;
