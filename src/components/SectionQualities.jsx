import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

export default function SectionQualities({ children, srcVideo }) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
    };

    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    if (!isVideoLoaded) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    let rafId = null;
    let lastScrollTime = 0;
    const scrollThreshold = 16; // ~60fps

    const updateVideoTime = throttle(() => {
      if (!video || !section) return;

      const now = performance.now();
      if (now - lastScrollTime < scrollThreshold) {
        rafId = requestAnimationFrame(updateVideoTime);
        return;
      }
      lastScrollTime = now;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Optimisation du calcul de visibilité
      const sectionHeight = section.offsetHeight;
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const visibleRatio = Math.max(
        0,
        Math.min(1, visibleHeight / sectionHeight)
      );

      // Mise à jour plus fluide du temps de la vidéo
      const videoDuration = video.duration || 1;
      const targetTime = visibleRatio * videoDuration;

      // Interpolation linéaire pour une transition plus douce
      const currentTime = video.currentTime;
      const diff = targetTime - currentTime;
      const smoothedTime = currentTime + diff * 0.1;

      video.currentTime = smoothedTime;
    }, 16); // Throttle à ~60fps

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      updateVideoTime.cancel();
    };
  }, [isVideoLoaded]);

  return (
    <>
      <div ref={sectionRef} className="content-animation-frame"></div>
      <section id="qualities" className="aboute-me__qualities">
        <video ref={videoRef} muted preload="auto" playsInline>
          <source src={srcVideo} type="video/mp4" />
        </video>
        <div className="aboute-me__qualities__content container">
          <h2>Mes qualités</h2>
          <p>{children}</p>
        </div>
      </section>
    </>
  );
}
