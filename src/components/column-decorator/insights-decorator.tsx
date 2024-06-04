"use client";
import {
  getMottoColumnVariants,
  getMottoRadiantVariants,
} from "@/utils/animation/landing-page/motto-variants";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const InsightsDecorator = ({ triggered }: { triggered: boolean }) => {
  const controls = useAnimation();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [delays, setDelays] = useState([0.8, 1.1, 1.4, 1.7, 2.0, 2.3, 2.6]);
  const [hasCheck, setHasCheck] = useState(false);

  useEffect(() => {
    const CheckForResize = () => {
      if (window.innerWidth < 640) setMobile(true);
      else setMobile(false);
    };
    window.addEventListener("resize", CheckForResize);

    if (window.innerWidth < 640) {
      setDelays([0.8, 1.1, 1.4, 1.7, 2.0, 1.4, 1.7]);
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

  useEffect(() => {
    if (triggered) controls.start("animate");
    else controls.start("initial");
  }, [controls, triggered]);

  return (
    <div className="w-full max-w-[min(1600px,calc(0.8*100vw))] flex sm:relative absolute">
      {hasCheck && (
        <div
          className="w-full max-w-[min(1600px,calc(0.8*100vw))]
      h-screen
    flex relative z-20"
        >
          {/* 1st column */}
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
          {/* 2nnd->4th col */}
          {!isMobile && (
            <>
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
              {/* 3rd col */}
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
              {/* 4th col */}
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
            </>
          )}
          {/* 5th column */}
          <div className="sm:w-1/6 w-1/3 h-full relative">
            {!isLoaded ? (
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
              animate={controls}
              variants={getMottoRadiantVariants(0.7, "50%")}
              className="absolute w-1/2 xl:h-[30px] h-[18px] left-0 top-[90%] 
            bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
          "
            ></motion.div>
          </div>
          {/* 6th column */}
          <div className="sm:w-1/6 w-1/3 h-full relative">
            {!isLoaded ? (
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
              animate={controls}
              variants={getMottoRadiantVariants(0.7, "100%")}
              className="lg:h-20 w-full h-16 absolute top-[80%] left-0
            bg-[linear-gradient(90deg,hsla(0,1%,64%,.94),hsla(0,1%,64%,.471)_43.23%,hsla(0,1%,64%,.03))]
            "
            ></motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsDecorator;
