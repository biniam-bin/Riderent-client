import React, {useRef} from "react";
import { NavContainer, NavWrapper, SideBar } from "./style";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";


function Nav() {
  const sideRef = useRef();

  const closeSideBar = () => {
    sideRef.current.style.transform = "translateX(500px)";
  }
  
  const openSideBar = () => {
    
    sideRef.current.style.transform = "translateX(0px)";
  }


  return (
    <NavContainer>
      <NavWrapper>
        <div className="logo">
          <img src="/Logo.png" alt="" />
        </div>
        <ul className="navs">
          <li className="nav active">Home</li>
          <li className="nav">Home</li>
          <li className="nav">Home</li>
          <li className="nav">Home</li>
        </ul>
        <div className="btn">Sign In</div>

        <div className="menu_icon" onClick={() => openSideBar()}>
          <FiMenu />
        </div>
      </NavWrapper>
      <SideBar ref={sideRef}>
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
      </SideBar>
    </NavContainer>
  );
}

export default Nav;
