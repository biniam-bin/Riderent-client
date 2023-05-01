import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { LayoutContainer } from "./style";
import { MdKeyboardArrowUp } from "react-icons/md";
import Footer from "../Footer";

function Layout({ children }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <LayoutContainer>
      <Nav scroll={scroll} />
      {children}
      <div
        className={`btn-scroll ${!scroll && "hidden"}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MdKeyboardArrowUp size={20} />
      </div>
      <Footer/>
    </LayoutContainer>
  );
}

export default Layout;
