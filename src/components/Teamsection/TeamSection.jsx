import React, { useEffect, useRef, useState } from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // run only once
        }
      },
      { threshold: 0.3 } // trigger when 30% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="team-section-main">

     <section
      className={`team-section ${isVisible ? "animate" : ""}`}
      ref={sectionRef}
    >
      <p className="team-title gruppo-regular">MEET THE TEAM</p>
      <div className="team-container">
        {/* Founder */}
        <div className="team-member founder">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvE2A7g-el0w4zmFqMKOdyzXj1OAFBkkg4mMsqDvNwWY_ZheoJYtgLS-XB8MXUBHHA984&usqp=CAU"
            alt="Founder"
          />
          <h3 className="newsreader">Ansar Mohammed</h3>
          <p className="newsreader">Founder</p>
        </div>

        {/* Co-Founder */}
        <div className="team-member co-founder">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLoKO8tKgmXkyTLW790Z0wcgmByRwknvy9w&s"
            alt="Co-Founder"
          />
          <h3 className="newsreader">Jane Smith</h3>
          <p className="newsreader">Co-Founder</p>
        </div>
      </div>
    </section>

    </div>
   
  );
};

export default TeamSection;
