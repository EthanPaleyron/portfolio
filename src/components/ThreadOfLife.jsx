import { useState, useEffect } from "react";
import { threadOfLifeList } from "../data/threadOfLifeList.js";
import CardThreadOfLife from "./CardThreadOfLife.jsx";

export default function ThreadOfLife() {
  const [threadOfLife, setThreadOfLife] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setThreadOfLife(threadOfLifeList);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="thread-of-life">
      {loader ? (
        <div>Chargement du fil de vie...</div>
      ) : (
        threadOfLife.map((card, index) => (
          <CardThreadOfLife
            key={index}
            image={card.image}
            firstDate={card.firstDate}
            lastDate={card.lastDate}
            description={card.description}
          >
            {card.name}
          </CardThreadOfLife>
        ))
      )}
    </div>
  );
}
