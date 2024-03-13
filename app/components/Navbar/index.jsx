"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDown, { MenuIcon } from "../Svgs";
import Button from "../Button/Button";

const options = ["Job 1", "Job 2", "Job 3", "Job 4"];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    // setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="h-[72px]">
      <nav className="w-full h-full ">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div className=" flex items-center justify-between mx-[18px] py-3 md:py-5 md:block">
            <Link href="/" className="flex gap-[6px]">
              <Image
                src="/images/Hireon Icon.png"
                width={24}
                height={24}
                alt="Logo"
              />
              <Image
                src="/images/logo-name.png"
                width={91}
                height={24}
                alt="logo name"
                className="object-contain"
              />
            </Link>
            <div className="md:hidden">
              <div
                className=" cursor-pointer bg-secondary flex items-center justify-center w-[40px] h-[40px] rounded-[8px]"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <MenuIcon /> : <MenuIcon />}
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${
                navbar
                  ? "p-0 bg-secondary md z-10 relative top-[20px] w-full h-full block"
                  : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto sm:flex flex max-[767px]:justify-start max-[767px]:items-center max-[767px]:flex-col max-[767px]:gap-[22px]">
                <li className=" flex items-center text-xl py-2 md:px-6 text-center hover:text-primary md:hover:bg-transparent  max-[767px]:pt-[32px]">
                  <div
                    ref={dropdownRef}
                    className="relative inline-block text-left"
                  >
                    <button
                      type="button text-black"
                      className="flex items-center gap-[8px] text-sm outline-none focus:border-none shadow-none hover:bg-transparent inline-flex justify-center w-full"
                      onClick={toggleDropdown}
                    >
                      {selectedOption || "Jobs"}
                      <ArrowDown className="hover:text-primary" />
                    </button>
                    {isOpen && (
                      <div className="origin-top-right absolute right-0 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className=""
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleOptionSelect(option)}
                              className="w-full text-start px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-primary"
                              role="menuitem"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li className="text-sm flex items-center py-2 px-6 text-center md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#blog">Blogs</Link>
                </li>
                <li className="text-sm flex items-center py-2 px-6 text-center md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#contact">Contact</Link>
                </li>
                <li className="mr-[16px] max-[767px]:mr-[0]">
                  <Button variant="outline">employ login</Button>
                </li>
                <li>
                  <Button variant="contained">candidate login</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
