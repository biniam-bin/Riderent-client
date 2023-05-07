import React from "react";
import { AboutContainer } from "./style";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

function AboutScreen() {
  return (
    <AboutContainer>
      <div className="header">
        <img src="/banner1.jpg" alt="" />
        <h1>About Us</h1>
      </div>
      <div className="body">
        <div className="row-1">
          <div className="left">
            <span>
              We offer customers a wide range of{" "}
              <span className="green"> commercial cars </span>
              and <span className="green">luxury cars</span> for any occasion.
            </span>
          </div>
          <div className="right">
            <p>
              Lorem ipsum non aliquip esse do eu ad amet laboris do labore
              reprehenderit mollit exercitation cillum irure fugiat magna
              laboris aliquip adipisicing consectetur officia dolor minim ea
              enim amet in ut non non excepteur anim magna dolor nostrud commodo
              qui irure deserunt adipisicing nisi ex nostrud sunt officia in
              aliquip velit anim id aliqua qui do sed non ad qui sed in eu in
              aliqua sunt pariatur occaecat in ullamco deserunt dolor
              consectetur laborum non duis occaecat nulla ut sed qui sunt id ex
              sint sed eu excepteur minim nulla minim excepteur exercitation.
            </p>
          </div>
        </div>
        <div className="row-2">
          <div className="left">
            <h1>
              Call us for further information. Rentaly customer care is here to
              help you anytime.
            </h1>
          </div>
          <div className="right">
            <span className="icon">
              <BsFillTelephoneFill />
            </span>
            <p>CALL US NOW</p>
            <h3>1 200 333 800</h3>
            <span className="btn">
              {" "}
              <Link href="/contact">Contact Us</Link>
            </span>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

export default AboutScreen;
