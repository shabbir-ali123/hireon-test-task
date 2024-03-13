"use client";

import React from "react";
import { SearchIcon } from "../Svgs";

const SearchBar = ({
  placeholder = "Search...",
  className,
  icon = <SearchIcon />,
}) => {
  return (
    <div className={`flex items-center rounded-lg p-2 w-full ${className} `}>
      {icon && <>{icon}</>}
      {/* <Icon /> */}
      <input
        type="search"
        placeholder={placeholder}
        className="outline-none flex-1 pl-[8px] text-[14px] w-[208px]"
      />
    </div>
  );
};

export default SearchBar;
