import React, { useEffect, useState } from "react";

function Navbar2({ onMenuClick }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down → hide
        setIsHidden(true);
      } else {
        // Scrolling up → show
        setIsHidden(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`common-droct1 ${isHidden ? "hide" : ""}`}>
      <div className="common-cols1 menu-toggle" id="menu-toggle">
        <a href="#" className="sidemenu icon1" onClick={onMenuClick}>
          <i className="fa fa-bars" style={{ color: "black" }}></i>
        </a>
        <a
          href="#"
          className="menu1 menudisappear montserrat"
          onClick={onMenuClick}
          style={{ color: "black" }}
        >
          MENU
        </a>
      </div>
      <div className="common-cols2">
        <h1 className="heading1 days-one-regular">HASH</h1>
      </div>
    </div>
  );
}

export default Navbar2;
