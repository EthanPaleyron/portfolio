import { motion } from "motion/react";
import "../sass/loading-screen.scss";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      <img src="/assets/cube-3d.png" alt="Cube" />
    </motion.div>
  );
}
