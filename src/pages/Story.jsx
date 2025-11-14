import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumps from '../components/Breadcrumps';
import Navbar2 from '../components/Navbar2';

function Story() {

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  return (
    <div classNameName="story-main">
     <Breadcrumps
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Navbar2 onMenuClick={() => setIsSidebarOpen(true)} />

  <section className="story_sec1">
    <div className="story-content baskervville">
      <h1>Make Your Story</h1>
      <p>
        Share your thoughts, ideas, or stories with us!  
        <br />
        Fill out the form on the right to get started.
      </p>
      <Link to="/gall">
      <button className="gallery-btn gruppo-regular">
        GALLERY
      </button>
      </Link>
    
    </div>

    <div className="iphone-frame">
      <div className="iphone-notch"></div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeE8k7WOChWHmVO3vwiAXwvtP4sLowpg0K5S4zOyUS5i0Ukag/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        allowfullscreen
        className="iphone-screen">
      </iframe>
      <div className="iphone-home"></div>
    </div>
  </section>



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
       <p><Link to="/gall" className="quicklink">Wedding Gallery</Link></p>
       <p><Link to="/contact" className="quicklink">Contact</Link></p>
       
    </div>
  </div>
    </footer>
    </div>
  )
}

export default Story