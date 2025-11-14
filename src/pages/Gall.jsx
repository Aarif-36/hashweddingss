import React, { useState } from "react";
import { Link } from "react-router-dom";
import Gallery from '../components/Gallery'
import Breadcrumps from "../components/Breadcrumps";
import Navbar2 from "../components/Navbar2";

function Gall() {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
     <div className="gallery-main">
       <Breadcrumps
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Navbar2 onMenuClick={() => setIsSidebarOpen(true)} />

       <div className="gallery-header">
        <div className="gall-nav-btn">
            <Link to="/previous-gallery" className="nav-btn left">
             <i className="">
               &#10094;
             </i>
            </Link>
        </div>
        <div className="gall-title baskervville">
          <p>Pre Wedding</p>
        </div>
       <div className="gall-nav-btn">
         <Link to="/next-gallery" className="nav-btn right">
            <i className="">
               &#10095;
            </i>
         </Link>
       </div>
      </div>

      <Gallery />
      
        <footer className="site-footer">
    <div className="footer-titles">
    <div className="footer-title1">
    <h1 className="yeseva-one-regular">LETS DO SOMETHING</h1>
    <h1 className="yeseva-one-regular">GREAT TOGETHER</h1>
  </div>
  <div className="footer-title2">
    <h2 className="days-one-regular">HASH WEDDINGS</h2>
  </div>
  <div className="line">
    <hr />
  </div>
    </div>


  <div className="footer-container">

    {/* Column 1: Contact Info */}
    <div className="footer-box">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
    </div>

    {/* Column 2: Social Media */}
    <div className="footer-box">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    {/* Column 3: Extra Info */}
    <div className="footer-box">
      <h3>Quick Links</h3>
       <p><Link to="/" className="quicklink">Home</Link></p>
       <p><Link to="/about" className="quicklink">About</Link></p>
       <p><Link to="/contact" className="quicklink">Contact</Link></p>
       <p><Link to="/story" className="quicklink">Tell Your Story</Link></p>
       
    </div>
  </div>
    </footer>
      
     </div>
  )
}

export default Gall