import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, animate } from "motion/react";

export default function Cube3d() {
  const rotateX = useSpring(0, { damping: 50, stiffness: 1000 });
  const rotateY = useSpring(0, { damping: 50, stiffness: 1000 });
  const rotateZ = useMotionValue(0);
  const x = useMotionValue(-1250);
  const y = useMotionValue(-500);
  const [animationComplete, setAnimationComplete] = useState(false);

  function startAnimation() {
    animate(x, 0, {
      duration: 1.25,
      ease: "easeOut",
    });
    animate(y, 0, {
      duration: 1.15,
      ease: "easeOut",
    });

    animate(rotateZ, 2 * 90 + 10, {
      duration: 1.25,
      ease: "easeOut",
      onComplete: () => {
        setAnimationComplete(true);
      },
    });
  }
  useEffect(() => {
    startAnimation();

    rotateY.set(-30);
    rotateX.set(-15);

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 35 - 10;
      const mouseY = (e.clientY / window.innerHeight) * -35 + 10;

      rotateY.set(mouseX - 30);
      rotateX.set(mouseY - 15);
    };

    if (animationComplete) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animationComplete]);

  const handleClick = () => {
    setAnimationComplete(false);
    x.set(-1250);
    y.set(-500);
    rotateZ.set(0);
    rotateY.set(0);
    rotateX.set(0);

    startAnimation();

    rotateY.set(-30);
    rotateX.set(-15);
  };

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
        onClick={handleClick}
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
