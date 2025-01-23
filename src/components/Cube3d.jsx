import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, animate } from "motion/react";

const Cube3d = () => {
  const rotateX = useSpring(0, { damping: 20, stiffness: 400 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 400 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    animate({ x: ["-800px", "0px"] }, { duration: 0 });
    animate({ y: ["-50px", "0px"] }, { duration: 0 });

    animate(x, 0, {
      duration: 1.5,
      ease: "easeOut",
    });
    animate(y, 0, {
      duration: 1.5,
      ease: "easeOut",
    });

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 35 - 10;
      const mouseY = (e.clientY / window.innerHeight) * -35 + 10;

      rotateY.set(mouseX + 60);
      rotateX.set(mouseY - 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="content-cube">
      <motion.div
        className="cube"
        style={{
          x,
          y,
          rotateX,
          rotateY,
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default Cube3d;
