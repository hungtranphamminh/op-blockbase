"use client";
import { useState, useEffect } from "react";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { motion } from "framer-motion";

export default function BackgroundDecorator() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);
  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      <div
        className="w-full max-w-[min(1600px,calc(0.8*100vw))] 
      h-[100vh] z-20 flex relative"
      >
        {/* 1st col */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-l border-white absolute top-0 left-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.2)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
          )}
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.5)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
        {/* 1st col */}
        <div className="w-1/6 h-full relative">
          {!isLoaded ? (
            <motion.div
              className="w-[1px] h-full border-r border-white absolute top-0 right-0"
              initial="initial"
              animate="animate"
              variants={getMottoColumnVariants(0.8)}
            ></motion.div>
          ) : (
            <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
          )}
        </div>
        {/* 1st col */}
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
        {/* 1st col */}
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
        {/* 1st col */}
        <div className="w-1/6 h-full relative">
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
        <div className="w-1/6 h-full relative">
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
