import React from "react";
import { FooterContainer } from "./style";
import { CiFacebook } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { BsLinkedin, BsPinterest } from "react-icons/bs";

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div className="col">
          <h4 className="title">About Rentride</h4>
          <p className="body">
            In tempor magna non ut labore sunt et in adipisicing do in proident
            veniam officia deserunt mollit velit aliquip sint fugiat
            reprehenderit sint anim pariatur deserunt id in ut non.
          </p>
        </div>
        <div className="col">
          <h4 className="title">Contact Info</h4>
          <p className="body">
            08 W 36th St, New York, NY 10001 +1 333 9296 contact@example.com
            Download Brochure
          </p>
        </div>
        <div className="col">
          <h4 className="title">Quick Links</h4>
          <span className="footer-body">
            <p>About</p>
            <p>Blog</p>
            <p>careers</p>
            <p>News</p>
            <p>Partners</p>
          </span>
        </div>
        <div className="col">
          <h4 className="title">Social Network</h4>
          <p className="body social">
            <span>
              <GrFacebookOption />
            </span>
            <span>
              <BsLinkedin />
            </span>
            <span>
              <BsPinterest />
            </span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
