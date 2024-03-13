import React from "react";
import "./styleClient.css";
export const Client = ({
  feedbackTitle,
  feedback,
  clientName,
  occupation,
  imageUrl,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center h-[150px] gap-4 mx-4 rounded-md bg-secondary-light p-8 text-center">
        <h1 className="font-bold text-black-light">{feedbackTitle}</h1>
        <p className="feedback text-secondary-dark">{feedback}</p>
      </div>
      <div className="arrow"></div>
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt="Client"
          className="rounded-full h-[50px] w-[50px]"
        />
        <h2 className="font-bold mt-4 text-black-light text-[20px]">
          {clientName}
        </h2>
        <p className="occupation text-[#474A57] text-[14px]">{occupation}</p>
      </div>
    </div>
  );
};
