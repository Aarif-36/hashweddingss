import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumps from '../components/Breadcrumps';
import Navbar2 from '../components/Navbar2';

function Contact() {

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="contact-main">
        <Breadcrumps
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Navbar2 onMenuClick={() => setIsSidebarOpen(true)} />


   <section className="contact_sec1">
  <div className="intro-section">
  <div className="text-box">
    <h1 className="slide-in baskervville">Let's talk</h1>
    <p className="slide-in baskervville">
      Discover beautiful stories, inspiring ideas, and creative projects
      crafted with passion and precision.
    </p>
  </div>
    <div className="contact-info slide-in gruppo-regular">
      <div className="contact-item">
        <i className="fa fa-map-marker-alt"></i>
        <span>123 Wedding Street, Hyderabad, India</span>
      </div>
      <div className="contact-item">
        <i className="fa fa-envelope"></i>
        <span>contact@yourstudio.com</span>
      </div>
      <div className="contact-item">
        <i className="fa fa-phone"></i>
        <span>+91 98765 43210</span>
      </div>
      <div className="contact-item">
        <p className="gruppo-regular">SOCIALS</p>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <div className="iphone-frame">
    <div className="iphone-notch"></div>
       <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeE8k7WOChWHmVO3vwiAXwvtP4sLowpg0K5S4zOyUS5i0Ukag/viewform?embedded=true"
        style={{widt:"100%",
        heigh:"600",
        frameborde:"0",
        marginheigh:"0",
        marginwidt:"0",
        classNam:"rounded-lg shadow"}}
      >
      {/* className="iphone-screen" */}
      </iframe>
    <div className="iphone-home"></div>
      {/* <div className="text-center mt-6">
        <a
          href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition"
        >
         Chat on WhatsApp
        </a>
      </div> */}
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
       <p><Link to="/story" className="quicklink">Tell Your Story</Link></p>
    </div>
  </div>
    </footer>
    </div>
  )
}

export default Contact