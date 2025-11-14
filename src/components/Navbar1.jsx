import React, { useState } from "react";

function Navbar1({ onMenuClick }) {
  return (
    <div className="navbar1-main">
      <div className="droct1">
        <div className="cols1 menu-toggle" id="menu-toggle">
          {/* When clicked, open sidebar */}
          <a href="#" className="sidemenu icon1" onClick={onMenuClick}>
            <i className="fa fa-bars"></i>
          </a>
          <a href="#" className="menu1 montserrat" onClick={onMenuClick}>MENU</a>
        </div>
        <div className="cols2">
          <h1 className="heading1 days-one-regular">HASH</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
