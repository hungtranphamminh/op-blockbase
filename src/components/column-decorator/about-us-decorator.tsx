"use client";
import { useState, useEffect } from "react";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { motion } from "framer-motion";

export default function BackgroundDecorator() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [delays, setDelays] = useState([0.2, 0.5, 0.8, 1.1, 1.4, 1.7, 2.0]);
  const [hasCheck, setHasCheck] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    const CheckForResize = () => {
      if (window.innerWidth < 640) setMobile(true);
      else setMobile(false);
    };
    window.addEventListener("resize", CheckForResize);

    if (window.innerWidth < 640) {
      setDelays([0.2, 0.5, 0.8, 1.1, 1.4, 0.8, 1.1]);
      setMobile(true);
    }
    setHasCheck(true);

    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => {
      window.removeEventListener("resize", CheckForResize);
    };
  }, []);

  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      <div
        className="w-full max-w-[min(1600px,calc(0.8*100vw))] 
      h-[100vh] z-20 flex relative"
      >
        {/* 1st col */}
        {hasCheck && (
          <div className="sm:w-1/6 w-1/3 h-full relative">
            {!isLoaded ? (
              <motion.div
                className="w-[1px] h-full border-l border-white absolute top-0 left-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[0])}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
            )}
            {!isLoaded ? (
              <motion.div
                className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(delays[1])}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
            )}
          </div>
        )}
        {/* 2nd->4th col */}
        {hasCheck && !isMobile && (
          <>
            <div className="w-1/6 h-full relative">
              {!isLoaded ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(delays[2])}
                ></motion.div>
              ) : (
                <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
              )}
            </div>

            {/* 3rd col */}
            <div className="w-1/6 h-full relative">
              {!isLoaded ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(1.1)}
                ></motion.div>
              ) : (
                <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
              )}
            </div>
            {/* 4th col */}
            <div className="w-1/6 h-full relative">
              {!isLoaded ? (
                <motion.div
                  className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                  initial="initial"
                  animate="animate"
                  variants={getMottoColumnVariants(1.4)}
                ></motion.div>
              ) : (
                <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
              )}
            </div>
          </>
        )}
        {/* 1st col */}
        <div className="sm:w-1/6 w-1/3 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(1.7)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
        {/* 1st col */}
        <div className="sm:w-1/6 w-1/3 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(2.0)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
      </div>
    </div>
  );
}