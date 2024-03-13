import React from "react";
import Jobs from "../Svgs/jobs";

export const TrendingJobs = ({ jobTitle, numberOfOpenings }) => {
  return (
    <>
      <div className="flex gap-4 border  border-opacity-10 rounded-[16px] p-4">
        <Jobs />
        <div className="flex flex-col">
          <h2 className="text-[24px] font-semibold text-left text-[#2D432C] max-[767px]:text-[20px]">
            {jobTitle}
          </h2>
          <p className="text-sm font-normal text-left mt-4 text-gray-400">
            {`${numberOfOpenings} Opening`}
          </p>
        </div>
      </div>
    </>
  );
};
