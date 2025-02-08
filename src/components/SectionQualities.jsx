import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

export default function SectionQualities({ children, srcVideo }) {
  // Refs for video and section elements
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  // State to track if the video has loaded
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Effect to handle video metadata loading
  useEffect(() => {
    if (!videoRef.current) return;

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
    };

    // Add event listener for video metadata loading
    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Cleanup function to remove event listener
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  // Effect to handle scroll-based video playback
  useEffect(() => {
    if (!isVideoLoaded) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    let rafId = null;
    let lastScrollTime = 0;
    const scrollThreshold = 16; // ~60fps

    // Function to update video time based on scroll position
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

      // Calculate visibility ratio of the section
      const sectionHeight = section.offsetHeight;
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const visibleRatio = Math.max(
        0,
        Math.min(1, visibleHeight / sectionHeight)
      );

      // Update video time based on visibility ratio
      const videoDuration = video.duration || 1;
      const targetTime = visibleRatio * videoDuration;

      // Linear interpolation for smoother transition
      const currentTime = video.currentTime;
      const diff = targetTime - currentTime;
      const smoothedTime = currentTime + diff * 0.1;

      video.currentTime = smoothedTime;
    }, 16); // Throttle to ~60fps

    // Scroll event handler
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateVideoTime);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      updateVideoTime.cancel();
    };
  }, [isVideoLoaded]);

  // Render the component
  return (
    <>
      {/* Container for scroll-based animation */}
      <div ref={sectionRef} className="content-animation-frame"></div>
      <section id="qualities" className="aboute-me__qualities">
        {/* Video element */}
        <video ref={videoRef} muted preload="auto" playsInline>
          <source src={srcVideo} type="video/mp4" />
        </video>
        {/* Content container */}
        <div className="aboute-me__qualities__content container">
          <h2>Mes qualités</h2>
          <p>{children}</p>
        </div>
      </section>
    </>
  );
}
