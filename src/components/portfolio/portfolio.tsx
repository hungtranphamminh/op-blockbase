"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PortfolioDecorator from "../column-decorator/portfolio-decorator";
import { getFadeInFromLeftVariants } from "@/utils/animation/landing-page/about-us-variants";
import blackarrow from "@/images/about-us/arrow.svg";
import whitearrow from "@/images/portfolio/white-arrow.svg";

export default function Portfolio() {
  const [hover, setHover] = useState(false);
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
    if (scrollPos > window.innerHeight + 100) {
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
      className="w-full relative flex items-center justify-center bg-[#181a1f] h-screen"
      ref={portfolioRef}
    >
      {/* column grid background decorator */}
      <PortfolioDecorator triggered={triggered} />
      {/* main portfolio content */}
      <div className="w-full h-screen absolute text-white">
        <div className="w-full h-full">
          {/* section title */}
          <motion.div
            className="flex absolute xl:top-[170px] xl:gap-[30px] top-[100px] gap-[15px]
      z-30 -tracking-[1.5px] w-full text-white items-end justify-items-start"
            variants={getFadeInFromLeftVariants(0)}
            initial="hidden"
            animate={controls}
          >
            <div className="sm:h-[3px] h-[2px] w-[calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)] max-w-[8rem] bg-white"></div>
            <h2 className="sm:text-[1.5rem] leading-none text-[1rem]">
              Our Portfolio
            </h2>
          </motion.div>
          {/* video and motto */}
          <div className="max-w-[min(1600px,calc(0.8*100vw))] h-screen w-full m-auto pt-[75px] flex justify-center items-center">
            <div className="flex items-center justify-center w-full">
              <div className="w-1/2">
                <video className="w-full h-auto" muted autoPlay loop>
                  <source
                    src="/videos/landing-page/globe.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* motto */}
              <div className="w-1/2 relative z-[9999] ">
                <motion.p
                  className="xl:text-[2.375rem] lg:text-[1.8rem] lg:mb-20 mb-[50px] leading-normal text-[1.5rem]"
                  variants={getFadeInFromLeftVariants(0.5)}
                  initial="hidden"
                  animate={controls}
                >
                  We aim to generate returns for our investors while
                  contributing to a more sustainable and socially responsible
                  future.
                </motion.p>
                <motion.div
                  variants={getFadeInFromLeftVariants(0.7)}
                  initial="hidden"
                  animate={controls}
                >
                  <Link
                    href=""
                    className="relative z-[9999] w-fit overflow-hidden flex items-center justify-center border border-white  px-[30px] py-[15px] gap-2.5 text-base font-medium uppercase"
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                  >
                    <div
                      className={`absolute top-0   h-full transform transition-all ${
                        hover ? " w-full left-0 " : " w-0 right-0"
                      } bg-white transition-all duration-200 ease-in-out`}
                    ></div>
                    <p className={` z-10 ${hover ? " text-black " : ""}`}>
                      VIEW PORTFOLIO
                    </p>
                    <Image
                      src={hover ? blackarrow : whitearrow}
                      alt="arrow"
                      className="relative z-10"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top right white bars */}
      <div
        style={{ height: flexHeight * 80 }}
        className="bg-[#f0f0f0] absolute top-0 right-0 max-h-[80px]
      w-[calc(calc(calc(100%-min(1600px,calc(0.8*100vw)))/2)+calc(min(1600px,calc(0.8*100vw))/6*4))]
      "
      ></div>
    </div>
  );
}
