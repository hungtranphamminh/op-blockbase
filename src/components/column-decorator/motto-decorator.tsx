"use client";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MottoDecorator = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className="w-full max-w-[min(1600px,calc(0.8*100vw))] flex relative">
      {/* main column */}
      <div
        className="w-full max-w-[min(1600px,calc(0.8*100vw))]
    xl:h-[calc(100vh-80px)]
    h-[calc(100vh-50px)]
    flex relative z-20"
      >
        {/* 1st column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-l border-white absolute top-0 left-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
          )}
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.3)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
          <motion.div
            initial="initial"
            animate="animate"
            variants={getMottoRadiantVariants(2.5, "100%")}
            className="lg:h-20 w-full h-16 absolute lg:top-[calc(calc(0.49*100vh)-80px)] top-[calc(calc(0.49*100vh)-50px)] 
          bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]"
          ></motion.div>
        </div>
        {/* 2nd column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.6)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
          <motion.div
            initial="initial"
            animate="animate"
            variants={getMottoRadiantVariants(2.5, "50%")}
            className="absolute w-1/2 
            xl:h-[30px]
            lg:top-[calc(calc(0.63*100vh)-80px)] 
            h-[18px] left-0 top-[63%] 
          bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
          "
          ></motion.div>
        </div>
        {/* 3rd column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.9)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
        {/* 4th column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(1.2)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
        {/* 5th column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(1.5)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
          <motion.div
            initial="initial"
            animate="animate"
            variants={getMottoRadiantVariants(2.7, "50%")}
            className="absolute w-1/2 xl:h-[30px] h-[18px] left-0 top-[22%] 
          bg-[linear-gradient(90deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
          "
          ></motion.div>
        </div>
        {/* 6th column */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(1.8)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
          <motion.div
            initial="initial"
            animate="animate"
            variants={getMottoRadiantVariants(2.5, "100%")}
            className="lg:h-20 w-full h-16 absolute top-[33%] right-0
            bg-[linear-gradient(90deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
            "
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default MottoDecorator;
