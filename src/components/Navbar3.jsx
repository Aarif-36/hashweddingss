import React, { useState } from "react";

function Navbar3({ onMenuClick }) {
  return (
    <div className="navbar3-main">
         <div className="drocty1">
        <div className="cols1 menu-toggle-modify" id="menu-toggle-modify" >
          <a  href="#" className="sidemenu icon1" onClick={onMenuClick}>
            <i className="fa fa-bars"></i>
          </a>
      </div>
      <div className="cols2 "> <h1 className=" heading1 days-one-regular">HASH</h1>
      </div>
      </div>
    </div>
  )
}

export default Navbar3