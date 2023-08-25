import React from "react";
import VisionCard from "./VisionCard";

function AfterHero() {
  const visions = [
    {
      title: "Foster Learning and Growth",
      description:
        "We believe that coding is a lifelong journey of discovery. Our community is dedicated to providing an environment that encourages continuous learning and personal growth. From beginners taking their first steps, to seasoned experts pushing the boundaries of technology, we're here to inspire and support your progress.",
    },
    {
      title: "Cultivate Collaboration",
      description:
        "In the world of coding, collaboration is key. We are committed to creating opportunities for our members to connect, collaborate, and create together. Whether it's through shared projects, hackathons, or collaborative coding challenges, we're building a network that thrives on teamwork.",
    },
    {
      title: "Ignite Innovation",
      description:
        "Coding is the language of innovation, and our community is a hub for innovative thinkers. We're not just following trends – we're setting them. Through regular brainstorming sessions, open forums, and daring experiments, we aim to push the boundaries of what technology can achieve.",
    },
    {
      title: "Give Back to Society",
      description:
        "Code has the power to change lives, and we're on a mission to make a positive impact. Through mentorship programs, workshops in underserved communities, and coding-for-good initiatives, we're using our skills to give back and empower those who need it most.",
    },
  ];

  return (
    <section className="vision-goals">
      <h2>Our Vision and Goals</h2>
      <div className="vision-cards">
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
