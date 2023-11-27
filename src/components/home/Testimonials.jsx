import React from "react";
import ReviewCard from "./ReviewCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const reviews = [
  {
    name: "Mayukh Halder",
    stars: 4.5,
    intro: "Competitive Programmer",
    review:
      "The resources, tutorials, coding challenges and the contests organized by Noobcode have been instrumental in expanding my understanding of programming concepts. From the bottom of my heart, I thank NoobCode.",
    image:
      "https://i.postimg.cc/4dKxg5QS/Whats-App-Image-2023-08-29-at-10-41-13-PM.jpg",
  },
  {
    name: "Sohel Datta",
    stars: 4.5,
    intro: "Web Developer",
    review:
      "I am deeply grateful to the whole of NOOBCODE community because of the firm support it has offered me throughout my journey. I owe a significant portion of my growth as a programmer to the incredible individuals who make up this remarkable community.",
    image:
      "https://i.postimg.cc/pTgXXF0X/IMG-20230830-WA0081.jpg",
  },
  {
    name: "Anushka Dutta",
    stars: 4.5,
    intro: "Competitive Programmer",
    review:
      "NoobCode is the very first coding community I have been with and its a great initiative as well as a wonderful platform for aspiring coders. The different events,seminars and workshops organized by them are really helpful and learnable.",
    image:
      "https://i.postimg.cc/MKHNkyKW/anushkadatta.jpg",
  },
  {
    name: "Ankan Ghosh",
    stars: 4.5,
    intro: "Programmer",
    review:
      "NoobCode has made my coding journey more helpful. It gives me the opportunity to develop and keep going. What I like about NoobCode is the guidance from my friends and I can solve any problem anytime from them. I also would like to suggest other students to join NoobCode and grab the opportunity to make their coding journey smooth.",
    image:
      "https://i.postimg.cc/ZnmXsS8p/ac3bf8a2-e56a-440a-a3ab-7d31c1d25b00.jpg",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Testimonials = () => {
  return (
      <div className="flex flex-col items-center gap-12 pt-8">
        <div className="font-bold text-white text-3xl tracking-widest hover:scale-x-110 ">
          <h1>Our Testimonials</h1>
        </div>
            {/* <div className="flex flex-row items-center justify-center gap-20 px-5 xl:px-20">
            <Splide  options={{
             type: 'slide',
             perPage: 3,
             focus: 'center',
             autoplay: true,
             interval: 8000,
             flickMaxPages: 3,
             updateOnMove: true,
             pagination: false,
             padding: '10%',
             throttle: 300,
             breakpoints: {
               1440: {
                 perPage: 1,
                 padding: '30%'
               },
               736: {
                perPage: 1,
                padding: '50%'
              }
              }
          }}>
          {reviews.map((review, index) => {
            return (
              <SplideSlide>
             <ReviewCard key={index}
              name = {review.name} stars={review.stars} intro={review.intro} image={review.image} review={review.review}> 
              </ReviewCard>
              </SplideSlide>
            );
          })}
          </Splide>
        </div> */}
<div className="flex flex-row  justify-center items-center">
        <Carousel
          responsive={responsive}
          className="w-[320px] 2xl:w-[1300px] h-[500px] flex flex-row items-center px-20 pl-10"
          arrows={false}
          showDots={true}
          
          transitionDuration={100}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {reviews.map((review, index) => {
            return (
          
             <ReviewCard key={index}
              name = {review.name} stars={review.stars} intro={review.intro} image={review.image} review={review.review}> 
              </ReviewCard>
         
            );
          })}
        </Carousel>
      </div>
        <div>

        </div>
      </div> 
  )
};

export default Testimonials
