import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css"; // Your CSS

function Services() {
  const navigate = useNavigate();

  const cards = [
    { title: "Pre Wedding", image: "/images/cimg2.jpg", path: "/gall" },
    { title: "Wedding", image: "/images/cimg3.jpg", path: "/wedding" },
    { title: "Post Wedding", image: "/images/cimg4.jpg", path: "/post-wedding" },
    { title: "Outdoor", image: "/images/cimg5.jpg", path: "/outdoor" },
  ];

  return (
    <section className="service">
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col"
            onClick={() => navigate(card.path)}
          >
            <div className="card bg-dark text-white">
              <img src={card.image} className="card-img" alt={card.title} />
              <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                <h5 className="card-title yeseva-one-regular">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
