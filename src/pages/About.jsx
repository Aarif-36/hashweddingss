import React, { useState } from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services/Services";
import Breadcrumps from '../components/Breadcrumps';
import Navbar2 from '../components/Navbar2';

function About() {

 const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="about-main">
       <Breadcrumps
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Navbar2 onMenuClick={() => setIsSidebarOpen(true)} />

    
<section className="about-section" id="about">
  <div className="about-container">
    {/* Left side: text */}
    <div className="about-content">
      <h2 className="about-title baskervville">About us</h2>
      <p className="about-text newsreader">
        There is no magic behind Stories from HasH ! .... Photography is our passion !!
      </p>
      <p className="about-text newsreader">
       Every wedding is a reflection of the love, hard work and dedication of the souls involved in it. Our endeavor is to convey these emotions in its natural bliss to every frame we capture. These frames speak great volumes beyond time and generations.
                When others go behind trends, we at Weva strive hard to keep alive those precious moments without losing the happiness and intensity behind them.
                Each and every frame has a story to tell and our Stories from Weva are the memories that we create for a lifetime.
      </p>
      
        <Link to="/contact">
        <button className="about-btn gruppo-regular">
        GET IN TOUCH
        </button>
        </Link>
       
        
    </div>

    {/* Right side: image */}
    <div className="about-image">
      <img src="../images/img10.jpg" alt="Our Photography" />
    </div>
  </div>
</section>

<div className="service">
    <h1 className="service-title baskervville">What We Do</h1>

  <Services />

</div>

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
       <p><Link to="/gall" className="quicklink">Wedding Gallery</Link></p>
       <p><Link to="/contact" className="quicklink">Contact</Link></p>
       <p><Link to="/story" className="quicklink">Tell Your Story</Link></p>
    </div>
  </div>
    </footer>
    </div>
  )
}

export default About