"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import React from "react";
const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

export default function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              Hear our Harmony
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Voices of success
            </p>
          </div>
          <div>
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
