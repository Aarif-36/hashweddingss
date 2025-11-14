import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumps from '../components/Breadcrumps';
import Navbar1 from '../components/Navbar1';
import Navbar3 from "../components/Navbar3";
import ImageCarousel from "../components/Imagecarousel/ImageCarousel";
import AutoCarousel from "../components/Autocarousel/AutoCarousel";
import TeamSection from "../components/Teamsection/TeamSection";
import BackToTop from "../components/BackToTop";


const slides = [
  { src: "/images/img1.jpeg", caption: "Register for our creative wedding photography services in Chennai and Enjoy the services of best cinematic wedding videographers in Kerala" },
  { src: "/images/img10.jpg", caption: "Register for our creative wedding photography services in Chennai" },
  { src: "/images/img11.jpg", caption: "Caption 3" },
  { src: "/images/img13.jpg", caption: "Caption 4" },
  { src: "/images/img2.jpg", caption: "Caption 5" },
  { src: "/images/img7.jpg", caption: "Caption 6" },
];

function Home() {

   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const [sidebarOpen, setSidebarOpen] = useState(false);
   

  return (
    <div className="main-body">

     <Breadcrumps
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

    <section className="proct1">

     
      <Navbar1 onMenuClick={() => setIsSidebarOpen(true)} />


            <div className="cont">
                <div className="row row-md-1">
                  <div className="col">
                    <a href="/gall">
                  <h5 className="info1 newsreader">
                    Archive your day with the best candid wedding photographers in Kerala</h5>
                  <h3 className="info2 yeseva-one-regular"> 
                    Pure Love !  Premium Kerala Wedding Photography </h3>
                  </a>
                  </div>
                  <div className="col">
                      <a href="/gall">
                   <h5 className="info1 newsreader">
                    Register for our creative wedding photography services in Chennai</h5>
                  <h3 className="info2 yeseva-one-regular">
                    classNameic Chennai Wedding Photography | Heartwarming</h3>
                      </a>
                  </div>
                  <div className="col">
                      <a href="/gall">
                    <h5 className="info1 newsreader">
                        Enjoy the services of best cinematic wedding videographers in Kerala</h5>
                      <h3 className="info2 yeseva-one-regular">
                        Best Wedding Videography Experience | Authentic Life Stories!</h3>
                      </a>
                  </div>
                  <div className="col">
                      <a href="/gall">
                    <h5 className="info1 newsreader">
                        Enjoy the services of best cinematic wedding videographers in Kerala</h5>
                    <h3 className="info2 yeseva-one-regular">
                        Best Wedding Videography Experience | Authentic Life Stories!</h3>
                      </a>
                </div>
                </div>
              </div>
    </section>
   
       
    <section className="modify">
     
      <Navbar3 onMenuClick={() => setIsSidebarOpen(true)} />

       <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"   // Auto slide every 2 seconds
       >
      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <div className="photo"></div>
          <div className="carousel-caption d-md-block bottompad">
            <h5 className="info1 newsreader">
              Archive your day with the best candid wedding photographers in Kerala
            </h5>
            <h3 className="info2 yeseva-one-regular">
              Pure Love ! Premium Kerala Wedding Photography
            </h3>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div className="photo1"></div>
          <div className="carousel-caption d-md-block bottompad">
            <h5 className="info1 newsreader">
              Register for our creative wedding photography services in Chennai
            </h5>
            <h3 className="info2 yeseva-one-regular">
              Classic Chennai Wedding Photography | Heartwarming
            </h3>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">
          <div className="photo2"></div>
          <div className="carousel-caption d-md-block bottompad">
            <h5 className="info1 newsreader">
              Enjoy the services of best cinematic wedding videographers in Kerala
            </h5>
            <h3 className="info2 yeseva-one-regular">
              Best Wedding Videography Experience | Authentic Life Stories!
            </h3>
          </div>
        </div>

        {/* SLIDE 4 */}
        <div className="carousel-item">
          <div className="photo3"></div>
          <div className="carousel-caption d-md-block bottompad">
            <h5 className="info1 newsreader">
              Enjoy the services of best cinematic wedding videographers in Kerala
            </h5>
            <h3 className="info2 yeseva-one-regular">
              Best Wedding Videography Experience | Authentic Life Stories!
            </h3>
          </div>
        </div>
      </div>
        </div>
    </section>

    <section className="proct2">
        <h2 className="baskervville  font1">Stories from hash | Wedding Photos</h2>
        <h5 className="newsreader">We try to explain the story of each wedding through our creativity and vision.</h5>
    </section>

        <section className="proct3">
       <div className="conty">
            <div className="row row-cols-2">
                <div className="col col-md-6 col-sm-12 col-12">
                  <a href="/gall">
                    <div className="image images1">
                        <img src="images/img12.jpg" alt="" />
                        <div className="content">
                            <div className="passage">
                                <h4 className="yeseva-one-regular">The Munnar Morning Glory! | The Fuzzy Wedding Proposal Highlights of Nikhil &amp; Loukya</h4>
                                <h6 className="newsreader">Pre Wedding Photography</h6>
                            </div>
                        </div>
                    </div>  
                  </a>  
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <a href="/gall">
                        <div className="image images2">
                            <img src="images/img13.jpg" alt="" />
                            <div className="content">
                                <div className="passage">
                                    <h4 className="yeseva-one-regular"> The Grace of Maserati Red | The Glorious Hindu Engagement Highlights of Sreyus &amp; Gopika </h4>
                                    <h6 className="newsreader">Engagement</h6>
                                </div>                          
                            </div>
                  </div>
                    </a>
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <a href="/gall">
                        <div className="image images3">
                            <img src="images/img14.jpg" alt="" />
                            <div className="content">
                                <div className="passage">
                                    <h4 className="yeseva-one-regular">A Crimson Red Delicacy | The Jaw-Dropping Engagement Highlights of Amy &amp; Sachin </h4>
                                    <h6 className="newsreader">Betrothal Photography, Engagement</h6>
                                </div>
                            </div>
                        
                  </div>
                    </a>
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <a href="/gall">
                        <div className="image images4">
                            <img src="images/img15.jpg" alt="" />
                            <div className="content">
                                <div className="passage">
                                    <h4 className="yeseva-one-regular">Cheers to New Beginnings  The Flawless Engagement Highlights of Varun &amp; Rose</h4>
                                    <h6 className="newsreader">Betrothal Photography, Engagement</h6>
                                </div>  
                            </div>  
                          </div>
                    </a>
                </div>
            </div>
          </div>
        </section>

  <section className="proct3-1">
      <div className="couples">     
        <div className="couplestatus">     {/* style="padding: 10px 0 2% 0;" */}  
          <h3 className="baskervville">What</h3>
          <h1 className="baskervville">COUPLES SAY</h1>
        </div>

       {/* Pass paused prop — when sidebar is open, pause carousel */}
      <AutoCarousel slides={slides} paused={sidebarOpen} cardWidth={320} />


      </div>
    </section> 
  
    <section className="proct4">
      <div className="qoutes-title">
        <h1 className="bonheur-royale-regular">“Photography is a live affair with life"</h1> 
        <br />
        <h2 className="bonheur-royale-regular">-Burk Uzzle</h2>
        </div>
    </section> 

   <section className="gallery-sec1">
     <div className="recent-gallery">    {/*style="padding:3% 0 3% 0 ;"*/}
      <p className="baskervville"> Recent Work </p> 
    </div>

    <div className="recent-gallery1">

      <ImageCarousel />

        <div className="home-btn">
        <Link to="/gall">
        <button  className="recent-footer gruppo-regular">VIEW MORE</button>
        </Link>
        </div>

       </div>
      </section>

      <TeamSection />

  <footer className="site-footer">
    <div className="footer-titles">
    <div className="footer-title1">
    <h1 className="gruppo-regular">LETS DO SOMETHING</h1>
    <h1 className="gruppo-regular">GREAT TOGETHER</h1>
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
      <h3 className="gruppo-regular">Contact Us</h3>
      <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
      <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
      <p>
       <BackToTop />
      </p>
    </div>

    {/* Column 2: Social Media */}
    <div className="footer-box">
      <h3 className="gruppo-regular">Follow Us</h3>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    {/* Column 3: Extra Info */}
    <div className="footer-box footer-quick">
      <h3 className="gruppo-regular">Quick Links</h3>
       <p><Link to="/about" className="quicklink">About</Link></p>
       <p><Link to="/gall" className="quicklink">Wedding Gallery</Link></p>
       <p><Link to="/contact" className="quicklink">Contact</Link></p>
       <p><Link to="/story" className="quicklink">Tell Your Story</Link></p>
    </div>
  </div>
    </footer>
   

    </div>
  )
}

export default Home