import { useEffect, useRef, useState } from "react";

export default function Item({ children, image }) {
  const itemRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const observerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: 0.89 }
    );

    if (itemRef.current) {
      observerRef.current.observe(itemRef.current);
    }

    return () => {
      if (observerRef.current && itemRef.current) {
        observerRef.current.unobserve(itemRef.current);
      }
    };
  }, [isMobile]);

  return (
    <li ref={itemRef} className="interests__content__item">
      <h3>{children}</h3>
      <img src={`/assets/interests/${image}`} alt={children} />
    </li>
  );
}
