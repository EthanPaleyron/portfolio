import { useEffect, useRef, useState } from "react";

export default function Item({ children, image }) {
  const itemRef = useRef(null);
  const observerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
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
