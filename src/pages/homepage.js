import React from "react";
import TopNav from "../components/TopNav";
import Services from "../components/Services";
import Tools from "../components/Tools";
import AboutMe from "../components/AboutMe";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div>
      <TopNav />
      <Tools />
      <Services />
      <AboutMe />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
