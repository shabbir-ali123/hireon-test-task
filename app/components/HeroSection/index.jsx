import React from "react";
import SearchBar from "../Searchbar";
import { ArrowRightIcon, BorderIcon, LocationIcon, SearchIcon } from "../Svgs";
import Button from "../Button/Button";
import bgImage from "../../../public/images/background-img.png";

const HeroSection = () => {
  return (
    <div
      className="text-center bg-white pt-[80px] pb-[181px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-sm text-black font-semibold capitalize">
        INDIA’S #1 JOB PLATFORM
      </p>
      <h2 className="text-[44px] text-black-light font-semibold	max-[992px]:text-[32px]">
        Apna Job Portal :{" "}
      </h2>
      <h2 className="text-[44px] font-semibold max-[992px]:text-[32px]	text-primary">
        Your job search ends here
      </h2>
      <h4 className="text-2xl text-black-light font-semibold  max-[992px]:text-base">
        5 lac+ jobs for you to explore
      </h4>
      <div className="mt-[32px] flex items-center justify-center max-[992px]:hidden">
        <div className="rounded-full bg-white flex items-center flex-wrap px-[16px] py-[22px] gap-[60px] justify-center	 shadow-md">
          <div>
            <SearchBar
              placeholder="search jobs by ‘cmpany’"
              icon={<SearchIcon />}
            />
          </div>
          <BorderIcon />
          <div>
            <SearchBar
              placeholder="search jobs by ‘cmpany’"
              icon={<LocationIcon />}
            />
          </div>
          <Button variant={"contained"}>Search</Button>
          <button className="rounded-[28px] flex items-center gap-[10px] border border-secondary py-2 px-[18px] hover:bg-primary hover:text-white whitespace-nowrap">
            View all <ArrowRightIcon className="hover-text-white" />
          </button>
        </div>
      </div>
      {/* Small screen */}
      <div className="container mx-auto">
        <div className="mt-[32px]  flex items-center justify-center min-[992px]:hidden">
          <div className="flex items-center flex-wrap px-[16px] py-[22px]  justify-center flex-col w-full ">
            <div className="rounded-tl-[16px] rounded-tr-[16px] bg-white w-full flex items-center h-[56px] border-b-2">
              <SearchBar
                placeholder="search jobs by ‘cmpany’"
                icon={<SearchIcon />}
              />
            </div>
            <div className="rounded-bl-[16px] rounded-br-[16px] bg-white w-full flex items-center h-[56px]">
              <SearchBar
                placeholder="search jobs by ‘cmpany’"
                icon={<LocationIcon />}
              />
            </div>
            <div className="w-full mt-[18px]">
              <Button variant={"contained"} size={"large"}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
