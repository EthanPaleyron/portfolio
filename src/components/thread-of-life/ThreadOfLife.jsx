import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { threadOfLifeList } from "../../data/threadOfLifeList.js";
import CardThreadOfLife from "./CardThreadOfLife.jsx";
import Line from "./Line.jsx";

export default function ThreadOfLife() {
  const [threadOfLife, setThreadOfLife] = useState([]);
  const [loader, setLoader] = useState(true);
  const targetRef = useRef(null);
  const contentRef = useRef(null);

  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setThreadOfLife(threadOfLifeList);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <div ref={targetRef} className="thread-of-life">
      <div className="thread-of-life__slider">
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="thread-of-life__slider__content"
        >
          <Line />
          {loader ? (
            <div>Chargement du fil de vie...</div>
          ) : (
            threadOfLife.map((card, index) => (
              <>
                <CardThreadOfLife
                  key={index}
                  image={card.image}
                  firstDate={card.firstDate}
                  lastDate={card.lastDate}
                  description={card.description}
                >
                  {card.name}
                </CardThreadOfLife>
                <Line />
              </>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
