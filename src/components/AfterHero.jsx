import React from "react";
import VisionCard from "./VisionCard";
import {motion} from 'framer-motion';

function AfterHero() {
  const visions = [
    {
      title: "Foster Learning and Growth",
      description:
        "From beginners taking their first steps, to seasoned experts pushing the boundaries of technology, we're here to inspire and support your progress.",
    },
    {
      title: "Ignite Innovation",
      description:
        "We're not just following trends – we're setting them. Through regular brainstorming sessions, open forums, and daring experiments, we aim to push the boundaries of what technology can achieve.",
    },
    {
      title: "Cultivate Collaboration",
      description:
        "Whether it's through shared projects, hackathons, or collaborative coding challenges, we're building a network that thrives on teamwork.",
    }
  ];

  return (
    <section className="vision-goals mt-40">
      <h2 className="vision-goals text-3xl md:text-6xl text-center">Our Vision and Goals</h2>
      <br/>
      <div className="vision-cards border-white-500 grid justify-evenly grid-cols-1 md:grid-cols-3 gap-5 m-5">
        {visions.map((vision, index) => (
          <VisionCard
            key={index}
            title={vision.title}
            description={vision.description}
          />
        ))}
      </div>
    </section>
  );
}

export default AfterHero;
