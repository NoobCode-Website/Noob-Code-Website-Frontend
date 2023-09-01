import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Mayukh Halder",
    stars: 4.5,
    intro: "Competitive Programmer",
    review:
      "The resources, tutorials, and coding challenges provided and the contests organized by noobcode have been instrumental in expanding my understanding of programming concepts. So, from the bottom of my heart, I thank NoobCode.",
    image:
      "https://i.postimg.cc/4dKxg5QS/Whats-App-Image-2023-08-29-at-10-41-13-PM.jpg",
  },
  {
    name: "Sohel Datta",
    stars: 4.5,
    intro: "Web Developer",
    review:
      "I am deeply grateful to the whole of NOOBCODE community because of the firm support it has offered me throughout my journey.Without a doubt, I owe a significant portion of my growth as a programmer to the incredible individuals who make up this remarkable NOOBCODE.",
    image:
      "https://i.postimg.cc/pTgXXF0X/IMG-20230830-WA0081.jpg",
  },
  {
    name: "Anushka Dutta",
    stars: 4.5,
    intro: "Competitive Programmer",
    review:
      "NoobCode is the very first coding community I have been with and a great initiative as well as a wonderful platform for the aspiring coders .  The different events organized by them is really helpful and learnable . Also informations about different seminars and workshops are really useful .",
    image:
      "https://i.postimg.cc/MKHNkyKW/anushkadatta.jpg",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-12 py-8">
        <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
          <h1>Our Testimonials</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-20 px-5 xl:px-20 flex-wrap">
          {reviews.map((review, index) => {
            return (
             <ReviewCard name = {review.name} stars={review.stars} intro={review.intro} image={review.image} review={review.review} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
