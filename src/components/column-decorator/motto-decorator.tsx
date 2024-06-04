"use client";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MottoDecorator = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [delays, setDelays] = useState([0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8]);
  const [hasCheck, setHasCheck] = useState(false);

  useEffect(() => {
    const CheckForResize = () => {
      if (window.innerWidth < 640) setMobile(true);
      else setMobile(false);
    };
    window.addEventListener("resize", CheckForResize);

    if (window.innerWidth < 640) {
      setDelays([0, 0.3, 0.6, 0.9, 1.2, 0.6, 0.9]);
      setMobile(true);
    }
    setHasCheck(true);

    setTimeout(() => {
      setisLoaded(true);
    }, 3000);

    return () => {
      window.removeEventListener("resize", CheckForResize);
    };
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
        {hasCheck && (
          <div className="sm:w-1/6 w-1/3 h-full relative">
            {!isLoaded && hasCheck ? (
              <motion.div
                className="w-[1px] h-full border-l border-white absolute top-0 left-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[0])}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
            )}
            {!isLoaded && hasCheck ? (
              <motion.div
                className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[1])}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
            )}
            <motion.div
              initial="initial"
              animate="animate"
              variants={getMottoRadiantVariants(2.5, "100%")}
              className="lg:h-20 w-full h-16 absolute sm:top-[calc(calc(0.49*100vh)-80px)] top-[calc(calc(0.79*100vh)-50px)] 
          bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]"
            ></motion.div>
          </div>
        )}
        {/* 2nd column */}
        {!isMobile && hasCheck && (
          <>
            <div className="w-1/6 h-full relative">
              {!isLoaded && hasCheck ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(delays[2])}
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
            sm:top-[calc(calc(0.63*100vh)-80px)] 
            top-[calc(calc(0.75*100vh)-50px)]
            h-[18px] left-0 
          bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
          "
              ></motion.div>
            </div>
            {/* 3rd column */}
            <div className="w-1/6 h-full relative ">
              {!isLoaded && hasCheck ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(delays[3])}
                ></motion.div>
              ) : (
                <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
              )}
            </div>
            {/* 4th column */}
            <div className="w-1/6 h-full relative">
              {!isLoaded && hasCheck ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(delays[4])}
                ></motion.div>
              ) : (
                <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
              )}
            </div>
          </>
        )}
        {/* 5th column */}
        {hasCheck && (
          <div className="sm:w-1/6 w-1/3 h-full relative ">
            {!isLoaded && hasCheck ? (
              <motion.div
                className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[5])}
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
            sm:hidden
            block
            top-[calc(calc(0.75*100vh)-50px)]
            h-[18px] left-0 
          bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
          "
            ></motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={getMottoRadiantVariants(2.7, "50%")}
              className="absolute w-1/2 xl:h-[30px] h-[18px] right-0 top-[calc(calc(0.22*100vh)-50px)] block
          bg-[linear-gradient(90deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
          "
            ></motion.div>
          </div>
        )}
        {/* 6th column */}
        {hasCheck && (
          <div className="sm:w-1/6 w-1/3 h-full relative">
            {!isLoaded && hasCheck ? (
              <motion.div
                className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[6])}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
            )}
            <motion.div
              initial="initial"
              animate="animate"
              variants={getMottoRadiantVariants(2.5, "100%")}
              className="lg:h-20 w-full h-16 absolute sm:top-[33%] top-[calc(calc(0.27*100vh)-50px)] right-0
            bg-[linear-gradient(90deg,#fff,hsla(0,0%,100%,0.536)_30.73%,hsla(0,0%,100%,0.11))]
            "
            ></motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MottoDecorator;
