"use client";
import Button from "@/app/components/Button/Button";
import { Client } from "@/app/components/ClientCard/Client";
import { TrendingJobs } from "@/app/components/TrendingJobs/Trending";
import { cardsData, feedbackData } from "@/app/data/data";
import React from "react";
import SlickSlider from "react-slick";
const JobRules = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto ">
      <div className="mt-[100px] px-4 max-[992px]:mt-[0] ">
        <h4 className="text-3xl font-semibold text-center mb-[32px]">
          Trending Job Rules
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex items-center">
          {cardsData.map((card, index) => (
            <TrendingJobs
              key={index}
              imageUrl={card.imageUrl}
              jobTitle={card.jobTitle}
              numberOfOpenings={card.numberOfOpenings}
            />
          ))}
        </div>
        <div className="flex justify-center my-4 mt-10">
          <Button variant="outline">View All Jobs</Button>
        </div>
      </div>
      <div className="mt-[64px] mb-20">
        <h4 className="text-3xl font-semibold text-center mb-2 capatilize">
          Our Client Speaks
        </h4>
        <p className="text-center mb-[40px] text-[#909198]">
          We have been working with clients around the world
        </p>
        <SlickSlider {...settings}>
          {feedbackData.map((feedback, index) => (
            <Client
              key={index}
              feedbackTitle={feedback.feedbackTitle}
              feedback={feedback.feedback}
              clientName={feedback.clientName}
              occupation={feedback.occupation}
              imageUrl={feedback.imageUrl}
            />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};
export default JobRules;
