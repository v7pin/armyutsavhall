import React from "react";
import ganesha from "../assets/ganesha.png"; // Adjust the path as needed

const GaneshaSection = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-gradient-to-b from-[#3b0a1e] to-[#2c0c19]">
      <img
        src={ganesha}
        alt="Lord Ganesha"
        className="w-20 sm:w-24  md:w-28 drop-shadow-2xl"
      />
    </div>
  );
};

export default GaneshaSection;
