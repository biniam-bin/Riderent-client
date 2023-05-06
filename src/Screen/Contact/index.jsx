import React from "react";
import { ContactContainer } from "./style";

function ContactScreen() {
  return (
    <ContactContainer>
      <div className="header">
        <img src="/banner1.jpg" alt="" />
        <h1>Contact Us</h1>
      </div>
      <div className="body">
        <div className="left">
          <h2>Do you have any question?</h2>
          <form action="">
            <div className="row">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Phone" />
            </div>
            <textarea
              placeholder="Your message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="Submit" className="submit" />
          </form>
        </div>
        <div className="right">
          <div className="box">
            <h4>US Office</h4>
            <p>08 W 36th St, New York, NY 10001</p>
            <span>contact@example.com</span>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
}

export default ContactScreen;
