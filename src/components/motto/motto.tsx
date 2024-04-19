"use client";
import { getMottoFadeWidthVariants } from "@/utils/animation/landing-page/motto-variants";
import MottoDecorator from "../column-decorator/motto-decorator";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, use } from "react";

export default function Motto() {
  const [flexOpacity, setOpacity] = useState(1);
  const [flexHeight, setFlexHeight] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onScroll = () => {
      if (textRef.current && sectionRef.current) {
        const rectText = textRef.current.getBoundingClientRect();
        const rectSection = sectionRef.current.getBoundingClientRect();

        const scrollTop = window.scrollY;

        const textTop = scrollTop - rectText.top + 80;
        const sectionTop = scrollTop - rectSection.top;

        const textScrolled = textTop / rectText.height;
        const sectionScrolled = sectionTop / rectSection.height;
        setOpacity(1 - Math.min(textScrolled, 1));
        setFlexHeight(sectionScrolled);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="w-full relative flex items-center justify-center bg-[rgba(0,0,0,0.5)] h-screen xl:pt-20 pt-[50px]"
      ref={sectionRef}
    >
      {/*  */}
      <MottoDecorator />
      {/* main text content */}
      <div
        className={`px-[30px] pt-20 pb-5 flex items-center justify-center absolute left-0 top-0 w-full h-screen z-30`}
      >
        <div
          className="xl:max-w-[1000px] lg:max-w-[800px] max-w-[700px] w-full text-[rgb(221,221,221)]"
          ref={textRef}
          style={{ opacity: flexOpacity }}
        >
          <motion.h3
            initial="initial"
            animate="animate"
            variants={getMottoFadeWidthVariants(4)}
            className="
            2xl:text-[5.625rem] xl:text-[5rem] lg:text-[3rem] sm:text-[2.5rem] 
          text-[2rem] text-left w-full leading-[1.5]
          "
          >
            Staying
          </motion.h3>
          <motion.h1
            initial="initial"
            animate="animate"
            variants={getMottoFadeWidthVariants(4.5)}
            className="2xl:text-[9.375rem] 2xl:ml-[230px] xl:text-9xl xl:ml-[200px]
          lg:text-8xl lg:ml-[150px] sm:text-[5rem] sm:ml-[80px]
          text-[4rem] font-semibold leading-[1.5] mb-2.5 text-left -tracking-[1.5px]"
          >
            One Block
          </motion.h1>
          <div className="lg:flex gap-[50px] ">
            <motion.h2
              initial="initial"
              animate="animate"
              variants={getMottoFadeWidthVariants(5.0)}
              className="xl:text-[8rem]  2xl:text-[9.375rem] lg:text-[6rem] sm:text-[5rem]
               font-semibold -tracking-[1.5px] leading-none text-left"
            >
              Ahead
            </motion.h2>
            <motion.p
              initial="initial"
              animate="animate"
              variants={getMottoFadeWidthVariants(5.5)}
              className="2xl:text-[2rem] xl:text-[2.25rem] xl:ml-0
          lg:text-[2.375rem] lg:ml-[50px] sm:text-[2rem]  sm:w-full leading-[1.8]
          "
            >
              Paving the way for seamless integration between crypto and
              traditional finance.
            </motion.p>
          </div>
        </div>
      </div>
      {/* bottom right white bars */}
      <div
        style={{ height: flexHeight * 80 }}
        className="bg-[#f0f0f0] absolute bottom-0 right-0 max-h-[80px]
      w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*2))]
      "
      ></div>
    </div>
  );
}
