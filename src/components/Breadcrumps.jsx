import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Breadcrumps({ isOpen, onClose }) {
  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`} id="sidebar">
      <div className="sidebar-header">
        <h2>My Sidebar</h2>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <ul className="sidebar-menu">
        <li><Link to="/" className="montserrat" onClick={onClose}>Home</Link></li>
        <li><Link to="/about" className="montserrat" onClick={onClose}>About</Link></li>
        <li><Link to="/gall" className="montserrat" onClick={onClose}>Wedding Gallery</Link></li>
        <li><Link to="/contact" className="montserrat" onClick={onClose}>Contact</Link></li>
        <li><Link to="/story" className="montserrat" onClick={onClose}>Tell Your Story</Link></li>
      </ul>
    </aside>
  );
}

export default Breadcrumps;
