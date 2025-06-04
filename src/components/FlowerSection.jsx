import React from "react";
import Lottie from "lottie-react";
import flowerAnimation from "../assets/flower.json"; // Update path as needed

const FlowerSection = () => {
  return (
    <div className="w-full h-[150px] flex items-center justify-center bg-gradient-to-b from-[#240B15] to-[#1F0A12]">
      <Lottie
        animationData={flowerAnimation}
        loop={true}
        className="w-68  sm:w-80 md:w-96 "
      />
    </div>
  );
};

export default FlowerSection;
