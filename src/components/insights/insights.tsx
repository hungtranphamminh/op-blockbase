"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import InsightsDecorator from "../column-decorator/insights-decorator";
import {
  getFadeInFromLeftVariants,
  getFadeInFromLeftWidthVariants,
} from "@/utils/animation/landing-page/about-us-variants";
import blackarrow from "@/images/about-us/arrow.svg";

import wc from "@/images/insights/wc.png";
import mm from "@/images/insights/mm.png";
import jito from "@/images/insights/jito.png";
import PostCard from "./post-card";

const MOCKUP_POSTS = [
  {
    title: "Worldcoin ($WLD) to tackle concerns about privacy",
    author: "Oanh Trần",
    date: "2022-04-19",
    imgUrl: wc.src,
  },
  {
    title: "Monthly Macro Insights - March 2024",
    author: "Lucas",
    date: "2022-04-18",
    imgUrl: mm.src,
  },
  {
    title: "Jito vs Marinade",
    author: "Oanh Trần",
    date: "2022-04-12",
    imgUrl: jito.src,
  },
];

export default function Insights() {
  const [flexHeight, setFlexHeight] = useState(0);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const controls = useAnimation();
  const [scrollPos, setScrollPos] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (portfolioRef.current) {
        setScrollPos(window.scrollY);

        const rectSection = portfolioRef.current.getBoundingClientRect();

        const scrollTop = window.scrollY;
        const sectionTop = scrollTop - rectSection.top;

        const sectionScrolled = sectionTop / rectSection.height;
        setFlexHeight(
          sectionScrolled > 1 ? 1 : sectionScrolled < 0 ? 0 : sectionScrolled
        );
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPos > window.innerHeight * 3 + 100) {
      if (triggered) return;
      controls.start("show");
      setTriggered(true);
    } else {
      setTriggered(false);
      controls.start("hidden");
    }
  }, [controls, scrollPos]);

  return (
    <div
      className="w-full relative flex items-center justify-center bg-[#ddd] sm:h-screen min-h-screen"
      ref={portfolioRef}
    >
      {/* column grid background decorator */}
      <InsightsDecorator triggered={triggered} />
      {/* main portfolio content */}
      <div className="w-full sm:h-screen min-h-screen sm:absolute relative text-black">
        <div className="w-full h-full pt-[90px] sm:pt-0">
          {/* section title */}
          <motion.div
            className="flex absolute  xl:gap-[30px] top-[42px] gap-[15px]
      z-30 -tracking-[1.5px] w-full text-black items-end justify-items-start"
            variants={getFadeInFromLeftVariants(0)}
            initial="hidden"
            animate={controls}
          >
            <div className="sm:h-[3px] h-[2px] w-[calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)] max-w-[8rem] bg-black"></div>
            <h2 className="sm:text-[1.5rem] leading-none text-[1rem]">
              BlockBase Insights
            </h2>
          </motion.div>
          {/* posts */}
          <div className="max-w-[min(1600px,calc(0.8*100vw))] relative z-[9999] sm:h-screen w-full m-auto flex flex-col justify-center items-center">
            {/* link */}
            <motion.div
              variants={getFadeInFromLeftWidthVariants(1.0, "-1%")}
              initial="hidden"
              animate={controls}
              className="w-full flex sm:justify-end justify-start"
            >
              <div className="mb-[50px] flex items-center justify-center sm:gap-[20px] gap-[10px] sm:text-[1.375rem] opacity-1 hover:opacity-40 transition-all duration-500">
                VIEW ALL
                <div>
                  <Image src={blackarrow} alt="arrow" />
                </div>
              </div>
            </motion.div>
            {/* main posts */}
            <motion.div
              variants={getFadeInFromLeftVariants(0)}
              initial="hidden"
              animate={controls}
              className="w-full flex sm:flex-row flex-col flex-wrap items-start"
            >
              {MOCKUP_POSTS.map((post, index) => {
                return (
                  <div key={index} className="sm:w-1/3 w-full">
                    <PostCard post={post} />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      {/* top right white bars */}
      <div
        style={{ height: flexHeight * 80 }}
        className="bg-[#f0f0f0] absolute top-0 right-0 max-h-[80px]
      sm:w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*4))]
      w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*2))]
      "
      ></div>
    </div>
  );
}
