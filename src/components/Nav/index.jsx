import React, { useRef, useEffect, useState } from "react";
import { NavContainer, NavWrapper, SideBar } from "./style";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {collection} from "firebase/firestore"
import { provider } from "../../services/firebase";

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

  const handleSignIn = () => {

  
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
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
          <li>
            <Link href="/login">

        <div className="btn" >Sign In</div>
            </Link>
          </li>
        </ul>

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
