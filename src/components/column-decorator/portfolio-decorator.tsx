"use client";
import { getMottoRadiantVariants } from "@/utils/animation/landing-page/motto-variants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const PortfolioDecorator = ({ triggered }: { triggered: boolean }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (triggered) controls.start("animate");
    else controls.start("initial");
  }, [controls, triggered]);

  return (
    <div className="w-full max-w-[min(1600px,calc(0.8*100vw))] flex relative">
      {/* main column */}
      <div
        className="w-full max-w-[min(1600px,calc(0.8*100vw))]
      h-screen
    flex relative z-20"
      >
        {/* 1st column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
        </div>
        {/* 2nd column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
        </div>
        {/* 3rd column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
        </div>
        {/* 4th column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
        </div>
        {/* 5th column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          <motion.div
            initial="initial"
            animate={controls}
            variants={getMottoRadiantVariants(1, "50%")}
            className="absolute w-1/2 xl:h-[30px] h-[18px] left-0 top-[82%] 
          bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
          "
          ></motion.div>
        </div>
        {/* 6th column */}
        <div className="w-1/6 h-full relative">
          <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          <motion.div
            initial="initial"
            animate={controls}
            variants={getMottoRadiantVariants(1, "100%")}
            className="lg:h-20 w-full h-16 absolute top-[70%] left-0
            bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
            "
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDecorator;
