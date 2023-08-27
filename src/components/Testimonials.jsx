import React from 'react';
import ReviewCard from './ReviewCard';

function Testimonials() {
    const reviews = [
        {
          name: "Foster Learning and Growth",
          review:
            "From beginners taking their first steps, to seasoned experts pushing the boundaries of technology, we're here to inspire and support your progress.",
        },
        {
          name: "Ignite Innovation",
          review:
            "We're not just following trends – we're setting them. Through regular brainstorming sessions, open forums, and daring experiments, we aim to push the boundaries of what technology can achieve.",
        },
        {
          name: "Cultivate Collaboration",
          review:
            "Whether it's through shared projects, hackathons, or collaborative coding challenges, we're building a network that thrives on teamwork.",
        },
        {
          review:
            "Through mentorship programs, workshops in underserved communities, and coding-for-good initiatives, we're using our skills to give back and empower those who need it most.",
            name: "Give Back to Society"
        },
      ];
      return(
        <section className="testimonials">
        <h2>Hear from our members</h2>
        <br/>
        <div className="review-cards">
          {reviews.map((reviews, index) => (
            <ReviewCard
              key={index}
              review={reviews.review}
              name={reviews.name}
            />
          ))}
        </div>
      </section>
      );
}

export default Testimonials
