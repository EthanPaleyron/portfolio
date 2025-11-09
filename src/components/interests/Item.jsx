import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const Item = ({ children, image }) => {
  const itemRef = useRef(null);
  const observerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (isMobile) {
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
    } else {
      if (itemRef.current) {
        itemRef.current.classList.remove("visible");
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isMobile]);

  return (
    <li ref={itemRef} className="interests__content__item">
      <h3>{children}</h3>
      <img src={`/assets/interests/${image}`} alt={`Image pour ${children}`} />
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
}

export default Item;