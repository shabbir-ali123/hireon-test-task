import React from "react";
import Image from "next/image";
import Star from "../Svgs/star";
import QR from "../../../public/QR-scan.svg";
import PhoneBottom from "../../../public/Screen-bottom.svg";
import PhoneTop from "../../../public/Screen-top.svg";
import Icon from "../../../public/Hireon-Icon.svg";
import LinkedIn from "../../../public/LinkedIn.svg";
import FB from "../../../public/Facebook.svg";
import Insta from "../../../public/Insta.svg";
import Twitter from "../../../public/Twitter.svg";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500">
      <div>
        <div className="container mx-auto flex flex-col md:flex-row relative">
          <div className="w-1/2 py-[60px] max-[1024px]:w-full max-[1024px]:text-center">
            <h1 className="p-5 md:p-3 font-bold text-[48px] max-[1024px]:text-[32px]">
              Download Apna App!
            </h1>
            <h4 className="pl-5 font-bold text-sm md:text-base">
              Unlimited job applications | HRs contact you directly | Track your
              Applications
            </h4>
            <div className="p-3 md:p-5 flex items-center max-[1024px]:justify-center">
              <div className="border-r-2 pr-3 md:pr-5 mb-3 md:mb-0 ">
                <div className="flex items-center">
                  <Star />
                  <h2 className="font-bold text-lg md:text-2xl">4.4</h2>
                </div>
                <p className="text-md md:text-lg">5l reviews</p>
              </div>
              <div className="pl-3 md:pl-5">
                <h2 className="font-bold text-lg md:text-2xl">1 cr+</h2>
                <p className="text-md md:text-lg">app downloads</p>
              </div>
            </div>
            <div className="p-3 md:p-5 flex max-[1024px]:justify-center ">
              <Image
                priority
                src={QR}
                className=""
                height={"182px"}
                width={"340px"}
                alt="Follow us on Twitter"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center relative max-[1024px]:hidden">
            <div className="absolute top-[-1px] right-[258px] hidden sm:hidden md:block w-[271px]">
              <Image
                priority
                src={PhoneTop}
                className=""
                height={543.13}
                width={"100%"}
                alt="Follow us on Twitter"
              />
            </div>
            <div className="absolute bottom-[-1px] right-0 hidden sm:hidden md:block">
              <Image
                priority
                src={PhoneBottom}
                className=""
                height={543.13}
                width={271.57}
                alt="Follow us on Twitter"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#303155] item-center justify-center pt-[62px] pb-[16px]">
          <div className="flex items-center justify-center max-[1024px]:flex-col">
            <div className="border-r-0 md:border-r-2 pr-5 md:pr-3 mb-3 md:mb-0">
              <Image
                priority
                src={Icon}
                className=""
                height={38}
                width={188.41}
                alt="Follow us on Twitter"
              />
            </div>
            <div className="pl-3 md:pl-5 flex flex-col">
              <h3 className="font-bold text-md md:text-xl">
                Follow us on social media
              </h3>
              <div className="flex gap-4 mt-[16px] max-[1024px]:justify-center">
                <div className="flex justify-center items-center w-[28px] h-[28px] rounded-full bg-gray-200 p-2">
                  <Image priority src={Twitter} alt="Twitter" />
                </div>
                <div className="flex justify-center items-center w-[28px] h-[28px] rounded-full bg-gray-200 p-2">
                  <Image priority src={FB} alt="Facebook" />
                </div>
                <div className="flex justify-center items-center w-[28px] h-[28px] rounded-full bg-gray-200 p-2">
                  <Image priority src={Insta} alt="Instagram" />
                </div>
                <div className="w-[28px] h-[28px] rounded-full bg-gray-200 p-2">
                  <Image priority src={LinkedIn} alt="LinkedIn" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-3 md:my-5">
            <div className="flex mt-[32px] gap-[20px]">
              <p className="text-xs md:text-sm ">Privacy Policy</p>
              <p className="text-xs md:text-sm">Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="text-gray-800 flex item-center justify-center pt-2 pb-3 bg-white">
          <p className="text-xs md:text-sm">© 2021 Class Technologies Inc. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
2;
