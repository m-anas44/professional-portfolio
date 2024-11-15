import React from "react";
import ReviewCard from "./ReviewCard";
import CardImage from "../assets/card-image.jpg";
import image2 from "../assets/hero-img.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        scrub: true,
        start: "-200% 80%",
        end: "400% 80%",
      },
      x: "-1000",
    });
  });
  const reviews = [
    {
      content:
        "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
      name: "Sophia Ramirez",
      imgSrc: CardImage,
      company: "PixelForge",
    },
    {
      content:
        "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      name: "Ethan Caldwell",
      imgSrc: image2,
      company: "NexaWave",
    },
    {
      content:
        "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
      name: "Liam Bennett",
      imgSrc: CardImage,
      company: "CodeCraft",
    },
    {
      content:
        "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
      name: "Noah Williams",
      imgSrc: CardImage,
      company: "BrightWeb",
    },
    {
      content:
        "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
      name: "Ava Thompson",
      imgSrc: CardImage,
      company: "TechMosaic",
    },
    {
      content:
        "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
      name: "Jonathan",
      imgSrc: CardImage,
      company: "Skyline Digital",
    },
  ];

  return (
    <section className="section" id="reviews">
      <div className="container overflow-hidden">
        <h2 className="headline-2 mb-8 reveal-up">What our customers says</h2>
        <div className="scrub-slide flex items-stretch gap-3">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
