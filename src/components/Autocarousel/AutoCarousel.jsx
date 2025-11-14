import React, { useEffect, useRef } from "react";
import './AutoCarousel.css' // create/adjust this file

/**
 * AutoCarousel
 * Props:
 *  - slides: array of { src, alt?, ... } for images / content
 *  - paused: boolean (when true, auto-scroll pauses)
 *  - cardWidth (optional) default 320
 */
export default function AutoCarousel({ slides = [], paused = false, cardWidth = 320 }) {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastFrameRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const resumeTimeoutRef = useRef(null);

  // Ensure slides are duplicated once for seamless loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // If already duplicated, skip
    const initialCount = track.querySelectorAll(".card").length;
    if (initialCount === 0) return; // nothing to do
    // If only single set, duplicate it
    if (track.dataset.duplicated !== "true") {
      const nodes = Array.from(track.children);
      nodes.forEach((node) => {
        const clone = node.cloneNode(true);
        track.appendChild(clone);
      });
      track.dataset.duplicated = "true";
    }
  }, [slides]);

  // Auto scroll step using rAF
  const AUTO_SPEED = 0.6; // px per frame base (tune as needed)

  function autoStep(ts) {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    if (isDraggingRef.current || paused) {
      lastFrameRef.current = ts;
      rafRef.current = requestAnimationFrame(autoStep);
      return;
    }

    if (lastFrameRef.current == null) lastFrameRef.current = ts;
    const dt = ts - lastFrameRef.current;
    // normalize to 60fps
    const move = AUTO_SPEED * (dt / (1000 / 60));
    carousel.scrollLeft += move;

    // reset seamlessly when half scrolled (we duplicated once)
    const half = track.scrollWidth / 2;
    if (carousel.scrollLeft >= half) {
      carousel.scrollLeft -= half;
    }

    lastFrameRef.current = ts;
    rafRef.current = requestAnimationFrame(autoStep);
  }

  function startAutoScroll() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    lastFrameRef.current = null;
    rafRef.current = requestAnimationFrame(autoStep);
  }
  function stopAutoScroll() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }

  // Drag / touch handlers
  function pointerDown(clientX) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    isDraggingRef.current = true;
    carousel.classList.add("dragging");
    startXRef.current = clientX;
    startScrollRef.current = carousel.scrollLeft;
    stopAutoScroll();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }

  function pointerMove(clientX) {
    if (!isDraggingRef.current) return;
    const carousel = carouselRef.current;
    if (!carousel) return;
    const dx = clientX - startXRef.current;
    carousel.scrollLeft = startScrollRef.current - dx;

    // wrap logic
    const half = trackRef.current.scrollWidth / 2;
    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += half;
      startScrollRef.current += half;
      startXRef.current = clientX;
    } else if (carousel.scrollLeft >= half) {
      carousel.scrollLeft -= half;
      startScrollRef.current -= half;
      startXRef.current = clientX;
    }
  }

  function pointerUp() {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const carousel = carouselRef.current;
    if (carousel) carousel.classList.remove("dragging");
    // resume auto after short idle
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 700);
  }

  // center highlight
  function highlightCenter() {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;
    const viewportCenter = window.innerWidth / 2;
    let closest = null;
    let closestDist = Infinity;
    const allCards = track.querySelectorAll(".card");
    allCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(viewportCenter - cardCenter);
      card.classList.remove("center");
      if (dist < closestDist) {
        closestDist = dist;
        closest = card;
      }
    });
    if (closest) closest.classList.add("center");
  }

  // add listeners on mount
  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    // Mouse
    const onMouseDown = (e) => {
      e.preventDefault();
      pointerDown(e.clientX);
    };
    const onMouseMove = (e) => pointerMove(e.clientX);
    const onMouseUp = () => pointerUp();

    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Touch
    const onTouchStart = (e) => pointerDown(e.touches[0].clientX);
    const onTouchMove = (e) => pointerMove(e.touches[0].clientX);
    const onTouchEnd = () => pointerUp();

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: true });
    track.addEventListener("touchend", onTouchEnd);

    // prevent image dragging
    track.querySelectorAll("img").forEach((img) => (img.ondragstart = () => false));

    // scroll & resize events for center highlight
    const onScroll = () => requestAnimationFrame(highlightCenter);
    carousel.addEventListener("scroll", onScroll);
    window.addEventListener("resize", highlightCenter);

    // start autoscroll
    startAutoScroll();
    // initial center highlight (after a tick)
    requestAnimationFrame(highlightCenter);

    return () => {
      // cleanup
      stopAutoScroll();
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      carousel.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", highlightCenter);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause/resume when `paused` prop changes
  useEffect(() => {
    if (paused) {
      stopAutoScroll();
    } else {
      // small delay to avoid immediate jump
      if (!isDraggingRef.current) startAutoScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // Render cards (first set only — duplicates handled by effect)
  return (
    <div className="carousel" ref={carouselRef} aria-hidden="false">
      <div
        className="carousel-track"
        ref={trackRef}
        style={{ gap: "30px", alignItems: "stretch" }}
      >
        {slides.map((s, i) => (
          <div className="card" key={i} style={{ flex: `0 0 ${cardWidth}px` }}>
            {/* You can put more complex card content here */}
            <img src={s.src} alt={s.alt || `slide-${i}`} className="card-img-top" />
            <div className="card-body">
              <p className="card-text newsreader">{s.caption || ""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
