import React from "react";

const ContactUs = () => {
  const handleSubmit = () => {};

  return (
    <div className="contact-container">
      <div></div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label id="name">
            Name :
            <br />
            <input
              className="form-input"
              id="name"
              placeholder="Enter your name"
            />
          </label>
          <br />
          <label id="email">
            Email :
            <br />
            <input
              className="form-input"
              id="email"
              placeholder="Enter your email"
            />
          </label>
          <br />
          <label id="no">
            Mobile No. :
            <br />
            <input
              className="form-input"
              id="no"
              placeholder="Enter your mobile number"
            />
          </label>
          <br />
          <label id="message">
            Your Message :
            <br />
            <textarea
              className=""
              id="message"
              placeholder="Enter your message"
            />
          </label>
          <br />
          <button className="btn">Submit</button>
          <h1>.............in Progress.. Available soon. . .</h1>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
