import React from 'react';
import ReviewCard from './ReviewCard';

function Testimonials() {
    const reviews = [
        {
          name: "Foster Learning and Growth",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
        },
        {
          name: "Ignite Innovation",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
        },
        {
          name: "Cultivate Collaboration",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
        },
        {
          name: "Give Back to Society",
          review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
        },
        {
            name: "Give Back to Society",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
          },
          {
            name: "Give Back to Society",
            review:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias totam.",
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
