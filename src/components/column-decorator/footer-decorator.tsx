"use client";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const FooterDecorator = () => {
  const controls = useAnimation();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      controls.start("animate");
    }, 3000);
  }, []);

  return (
    <div className="w-full absolute h-full">
      <div className="w-full mx-auto max-w-[min(1600px,calc(0.8*100vw))] flex relative h-full">
        <div
          className="w-full max-w-[min(1600px,calc(0.8*100vw))]
      h-full
    flex relative z-20"
        >
          {/* 1st col */}
          <div className="w-1/6 h-full relative">
            {!isLoaded ? (
              <motion.div
                className="w-[1px] h-full border-l border-white absolute top-0 left-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(0.4)}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-l border-[rgba(177,177,177,0.4)] absolute top-0 left-0"></div>
            )}
            {!isLoaded ? (
              <motion.div
                className="w-[1px] h-full border-r border-white absolute top-0 right-0"
                initial="initial"
                animate="animate"
                variants={getMottoColumnVariants(0.7)}
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
                variants={getMottoColumnVariants(1.0)}
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
                variants={getMottoColumnVariants(1.3)}
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
                variants={getMottoColumnVariants(1.6)}
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
                variants={getMottoColumnVariants(1.9)}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
            )}
            <motion.div
              initial="initial"
              animate={controls}
              variants={getMottoRadiantVariants(1, "100%")}
              className="absolute w-1/2 lg:h-16 h-8 left-0 top-[15%] 
          bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
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
                variants={getMottoColumnVariants(2.2)}
              ></motion.div>
            ) : (
              <div className="w-[1px] h-full border-r border-[rgba(177,177,177,0.4)] absolute top-0 right-0"></div>
            )}
            <motion.div
              initial="initial"
              animate={controls}
              variants={getMottoRadiantVariants(1, "100%")}
              className="lg:h-[30px] w-full h-[18px] absolute top-[25%] left-0
            bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
            "
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDecorator;
