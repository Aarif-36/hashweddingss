import React, { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const captionsRef = useRef(null);
  const zoomRef = useRef(null);

  // ✅ Add all image paths here
  const slides = [
    { src: "/images/img1.jpeg", title: "Image 1" },
    { src: "/images/img2.jpg", title: "Image 2" },
    { src: "/images/img3.jpg", title: "Image 3" },
    { src: "/images/img4.jpg", title: "Image 4" },
    { src: "/images/img5.jpg", title: "Image 5" },
    { src: "/images/img6.jpg", title: "Image 6" },
    { src: "/images/img7.jpg", title: "Image 7" },
    { src: "/images/img8.jpg", title: "Image 8" },
    { src: "/images/img9.jpg", title: "Image 9" },
    { src: "/images/img10.jpg", title: "Image 10" },
    { src: "/images/img11.jpg", title: "Image 11" },
    { src: "/images/img12.jpg", title: "Image 12" },
    { src: "/images/img13.jpg", title: "Image 13" },
    { src: "/images/img14.jpg", title: "Image 14" },
    { src: "/images/img15.jpg", title: "Image 15" },
    { src: "/images/img16.jpg", title: "Image 16" },
  ];

  // ✅ When you click any image, open the lightbox at that image
  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className="gallery-sec1">
        <div className="grid-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "tall" : "big"}
              onClick={() => handleImageClick(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={slide.src} alt={slide.title} />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Lightbox Viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Zoom, Captions, Share]}
        zoom={{ ref: zoomRef }}
        captions={{ ref: captionsRef }}
      />
    </>
  );
}
