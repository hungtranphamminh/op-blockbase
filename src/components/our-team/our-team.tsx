"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import BackgroundDecorator from "../column-decorator/decorator";
import Image from "next/image";
import arrow from "@/images/about-us/arrow.svg";
import Link from "next/link";
import { getFadeInFromLeftVariants } from "@/utils/animation/landing-page/about-us-variants";
import { getSlideInFromLeftVariants } from "@/utils/animation/landing-page/our-team-variants";

export default function OurTeam() {
  const [hover, setHover] = useState(false);
  const controls = useAnimation();
  const [scrollPos, setScrollPos] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrollPos > 100 + window.innerHeight * 2) {
      if (triggered) return;
      controls.start("show");
      console.log("already show");
      setTriggered(true);
    } else {
      setTriggered(false);
      controls.start("hidden");
      console.log("outbox");
    }
  }, [controls, scrollPos]);

  return (
    <div className="w-full relative flex items-center justify-center bg-[#f0f0f0] h-screen">
      {/* background column grid */}
      <BackgroundDecorator />

      {/* section title */}
      <motion.div
        className="flex absolute xl:top-[170px] xl:gap-[30px] top-[100px] gap-[15px]
      z-30 -tracking-[1.5px] w-full text-black items-end justify-items-start"
      >
        <motion.div
          variants={getSlideInFromLeftVariants(0)}
          initial="hidden"
          animate={controls}
          className="sm:h-[3px] h-[2px] w-[calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)] max-w-[8rem] bg-black"
        ></motion.div>
        <motion.h2
          variants={getFadeInFromLeftVariants(1.0)}
          initial="hidden"
          animate={controls}
          className="sm:text-[1.5rem] leading-none text-[1rem]"
        >
          Our Team
        </motion.h2>
      </motion.div>
      {/* main content */}
      <div className="relative w-full max-w-[min(1600px,calc(0.8*100vw))] m-auto flex items-center justify-center z-30">
        <div className="flex flex-col items-center justify-center w-full max-w-[760px]">
          <motion.h2
            className=" text-center sm:text-[3.75rem] -tracking-[1.5px] text-[1.875rem] leading-normal mb-[40px]"
            variants={getFadeInFromLeftVariants(0.5)}
            initial="hidden"
            animate={controls}
          >
            Meet BlockBase
          </motion.h2>

          <motion.p
            className="text-center sm:text-[2.375rem] sm:mb-[80px] -tracking-[1.52px] text-[1.5rem] leading-normal mb-[50px]"
            variants={getFadeInFromLeftVariants(1.0)}
            initial="hidden"
            animate={controls}
          >
            A dedicated team of experienced blockchain technologists and
            financial experts.
          </motion.p>
          <motion.div
            variants={getFadeInFromLeftVariants(1.5)}
            initial="hidden"
            animate={controls}
          >
            <Link
              href=""
              className="relative overflow-hidden flex items-center justify-center border border-black  px-[30px] py-[15px] gap-2.5 text-base font-medium bg-[#f0f0f0] text-black uppercase"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <div
                className={`absolute top-0   h-full transform transition-all ${
                  hover ? " w-full left-0" : "w-0 right-0"
                } bg-white transition-all duration-200 ease-in-out`}
              ></div>
              <p className="relative z-10">VIEW TEAM</p>
              <Image src={arrow} alt="arrow" className="relative z-10" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
