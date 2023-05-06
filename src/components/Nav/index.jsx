import React, { useRef, useEffect, useState } from "react";
import { NavContainer, NavWrapper, SideBar } from "./style";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

function Nav() {
  const sideRef = useRef();
  const [location, setLocation] = useState("/")

  const closeSideBar = () => {
    sideRef.current.style.transform = "translateX(500px)";
  };

  const openSideBar = () => {
    sideRef.current.style.transform = "translateX(0px)";
  };

  useEffect(() => {
     setLocation(window.location.href.split("/")[3]);
  })
  return (
    <NavContainer>
      <NavWrapper>
        <div className="logo">
          <img src="/Logo.png" alt="" />
        </div>
        <ul className="navs">
          <li className={`nav ${location == "" && "active"}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`nav ${location == "cars" && "active"}`}>
            <Link href="/cars">Cars</Link>
          </li>
          <li className={`nav ${location == "about" && "active"}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`nav ${location == "contact" && "active"}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="btn">Sign In</div>

        <div className="menu_icon" onClick={() => openSideBar()}>
          <FiMenu />
        </div>
      </NavWrapper>
      {/* <SideBar ref={sideRef}>
        <div className="btn">
          <span onClick={() => closeSideBar()}>
            <MdOutlineClose />
          </span>
        </div>
        <ul className="navs">
          <li className="nav">Home</li>
          <li className="nav">List</li>
          <li className="nav">About</li>
          <li className="nav">Contact</li>
        </ul>
      </SideBar> */}
    </NavContainer>
  );
}

export default Nav;
