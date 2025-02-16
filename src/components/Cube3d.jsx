import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, animate } from "motion/react";

export default function Cube3d() {
  const rotateX = useSpring(0, { damping: 50, stiffness: 1000 });
  const rotateY = useSpring(0, { damping: 50, stiffness: 1000 });
  const rotateZ = useMotionValue(0);
  const x = useMotionValue(-800);
  const y = useMotionValue(-200);

  useEffect(() => {
    animate(x, 0, {
      duration: 1.25,
      ease: "easeOut",
    });
    animate(y, 0, {
      duration: 1.25,
      ease: "easeOut",
    });

    animate(rotateZ, 190, {
      duration: 1.25,
      ease: "easeOut",
    });

    rotateY.set(-30);
    rotateX.set(-15);

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 35 - 10;
      const mouseY = (e.clientY / window.innerHeight) * -35 + 10;

      rotateY.set(mouseX - 30);
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
          rotateZ,
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
}
