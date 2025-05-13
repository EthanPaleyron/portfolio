import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";

export default function SectionQualities({ children, srcVideo }) {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = value * video.duration;
    }
  });

  return (
    <section
      id="qualities"
      className="about-me__qualities"
      ref={videoContainerRef}
    >
      <video ref={videoRef} id="video" muted preload="auto" playsInline>
        <source src={`/assets/${srcVideo}`} type="video/mp4" />
      </video>
      <div className="about-me__qualities__content container">
        <h2>Mes qualités</h2>
        <p>{children}</p>
      </div>
    </section>
  );
}
